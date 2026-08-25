import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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

    constructor(
        private fb: FormBuilder,
        private personalInfoService: PersonalInfoService,
    ) { }

    ngOnInit(): void {
        this.personalForm = this.fb.group({
            firstName: ['john', Validators.required],
            lastName: ['doe', Validators.required],
            dateOfBirth: ['1990-01-01', Validators.required],
            countryOfBirth: ['United States', Validators.required],
            phone: ['+1234567890', [Validators.required, Validators.pattern(/^\+?[0-9\s-]{7,15}$/)]],
            email: ['john.doe@example.com', [Validators.required, Validators.email]],
            homeAddress: ['123 Main St, Apt 4B, City, State 12345', Validators.required]
        });
    }

    onSubmit(): void {
        if (this.personalForm.valid) {
            const payload: PersonalInfoPayload = this.personalForm.value;

            this.personalInfoService.savePersonalInfo(payload).subscribe({
                next: (response) => {
                    console.log('Personal information submitted successfully:', response);
                    this.personalForm.reset();
                },
                error: (error) => {
                    console.error('Failed to submit personal information:', error);
                }
            });
        } else {
            alert('Please fill in all required fields correctly before submitting.');
            console.log('Issues found in personal information:', this.personalForm.value);
            this.personalForm.markAllAsTouched();
        }
    }
}
