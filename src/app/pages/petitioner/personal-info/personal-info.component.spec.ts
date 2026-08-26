import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { PersonalInfoComponent } from './personal-info.component';
import { PersonalInfoService } from '../../../services/personal-info.service';

describe('PersonalInfoComponent', () => {
    let component: PersonalInfoComponent;
    let fixture: ComponentFixture<PersonalInfoComponent>;
    let personalInfoService: { savePersonalInfo: ReturnType<typeof vi.fn> };

    beforeEach(async () => {
        personalInfoService = { savePersonalInfo: vi.fn() };
        await TestBed.configureTestingModule({
            imports: [PersonalInfoComponent],
            providers: [{ provide: PersonalInfoService, useValue: personalInfoService }],
        }).compileComponents();

        fixture = TestBed.createComponent(PersonalInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render the expected form fields', () => {
        const compiled = fixture.nativeElement as HTMLElement;

        expect(compiled.querySelector('input[formControlName="firstName"]')).toBeTruthy();
        expect(compiled.querySelector('input[formControlName="lastName"]')).toBeTruthy();
        expect(compiled.querySelector('input[formControlName="dateOfBirth"]')).toBeTruthy();
        expect(compiled.querySelector('input[formControlName="countryOfBirth"]')).toBeTruthy();
        expect(compiled.querySelector('input[formControlName="phone"]')).toBeTruthy();
        expect(compiled.querySelector('input[formControlName="email"]')).toBeTruthy();
        expect(compiled.querySelector('textarea[formControlName="homeAddress"]')).toBeTruthy();
    });

    it('should start with empty required fields', () => {
        expect(component.personalForm.invalid).toBe(true);
        expect(component.personalForm.get('firstName')?.value).toBe('');
        expect(component.personalForm.get('email')?.value).toBe('');
    });

    it('should show validation feedback without submitting an invalid form', () => {
        component.onSubmit();
        fixture.detectChanges();

        expect(personalInfoService.savePersonalInfo).not.toHaveBeenCalled();
        expect(component.personalForm.get('firstName')?.touched).toBe(true);
        expect(fixture.nativeElement.querySelector('.submission-error')?.textContent)
            .toContain('correct the highlighted fields');
        expect(fixture.nativeElement.querySelector('#first-name-error')).toBeTruthy();
    });

    it('should submit valid information and show success feedback', () => {
        personalInfoService.savePersonalInfo.mockReturnValue(of({ personalInfo: component.personalForm.value }));
        component.personalForm.setValue({
            firstName: 'Jane',
            lastName: 'Doe',
            dateOfBirth: '1990-01-01',
            countryOfBirth: 'United States',
            phone: '+1 555 123 4567',
            email: 'jane@example.com',
            homeAddress: '123 Main Street'
        });

        component.onSubmit();

        expect(personalInfoService.savePersonalInfo).toHaveBeenCalledWith(component.personalForm.value);
        expect(component.submissionMessage).toBe('Personal information saved successfully.');
        expect(component.isSubmitting).toBe(false);
    });

    it('should show an error when saving fails', () => {
        personalInfoService.savePersonalInfo.mockReturnValue(throwError(() => new Error('Network error')));
        component.personalForm.patchValue({
            firstName: 'Jane',
            lastName: 'Doe',
            dateOfBirth: '1990-01-01',
            countryOfBirth: 'United States',
            phone: '+1 555 123 4567',
            email: 'jane@example.com',
            homeAddress: '123 Main Street'
        });

        component.onSubmit();

        expect(component.submissionError).toBe(true);
        expect(component.submissionMessage).toContain('could not save');
        expect(component.isSubmitting).toBe(false);
    });
});
