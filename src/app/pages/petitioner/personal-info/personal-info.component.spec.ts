import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalInfoComponent } from './personal-info.component';

describe('PersonalInfoComponent', () => {
    let component: PersonalInfoComponent;
    let fixture: ComponentFixture<PersonalInfoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PersonalInfoComponent],
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
});
