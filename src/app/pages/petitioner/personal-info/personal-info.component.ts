import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { PersonalInfoService } from '../../../services/personal-info.service';
import { PersonalInfoPayload } from '../../../interfaces/PersonalInfoPayload.interface';

@Component({
    selector: 'app-personal-info',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './personal-info.component.html',
    styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
    personalForm!: FormGroup;
    isSubmitting = false;
    submissionMessage = '';
    submissionError = false;
    readonly maxDate = new Date().toISOString().split('T')[0];

    constructor(
        private fb: FormBuilder,
        private personalInfoService: PersonalInfoService,
    ) { }

    ngOnInit(): void {
        this.personalForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.maxLength(100)]],
            lastName: ['', [Validators.required, Validators.maxLength(100)]],
            dateOfBirth: ['', Validators.required],
            countryOfBirth: ['', [Validators.required, Validators.maxLength(100)]],
            phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s().-]{7,20}$/)]],
            email: ['', [Validators.required, Validators.email]],
            homeAddress: ['', [Validators.required, Validators.maxLength(500)]]
        });
    }

    hasError(controlName: string): boolean {
        const control = this.personalForm.get(controlName);
        return !!control?.invalid && !!control.touched;
    }

    errorMessage(controlName: string): string {
        const control = this.personalForm.get(controlName);
        if (control?.hasError('required')) return 'This field is required.';
        if (control?.hasError('email')) return 'Enter a valid email address.';
        if (control?.hasError('pattern')) return 'Enter a valid phone number.';
        if (control?.hasError('maxlength')) return 'This field is too long.';
        return '';
    }

    onSubmit(): void {
        this.submissionMessage = '';
        this.submissionError = false;
        this.personalForm.markAllAsTouched();

        if (this.personalForm.invalid) {
            this.submissionError = true;
            this.submissionMessage = 'Please correct the highlighted fields and try again.';
            return;
        }

        const payload: PersonalInfoPayload = this.personalForm.getRawValue();
        this.isSubmitting = true;
        this.personalInfoService.savePersonalInfo(payload)
            .pipe(finalize(() => this.isSubmitting = false))
            .subscribe({
                next: () => {
                    this.submissionMessage = 'Personal information saved successfully.';
                    this.personalForm.reset();
                },
                error: () => {
                    this.submissionError = true;
                    this.submissionMessage = 'We could not save your information. Please try again.';
                }
            });
    }
}
