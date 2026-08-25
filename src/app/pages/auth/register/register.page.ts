import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  imports: [FormsModule],
  templateUrl: './register.page.html',
  styleUrl: './register.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterPage {
  private readonly router = inject(Router);
  protected readonly showPassword = signal(false);

  protected togglePassword(): void {
    this.showPassword.update(value => !value);
  }

  protected createAccount(): void {
    // TODO: Call registration API
    console.log('Create account');
  }

  protected login(): void {
    this.router.navigate(['/login']);
  }

  protected socialLogin(provider: 'google' | 'apple' | 'facebook'): void {
    // TODO: Implement OAuth login
    console.log(`Login with ${provider}`);
  }
}