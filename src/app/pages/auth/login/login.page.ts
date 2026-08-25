import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.page.scss',
  templateUrl: './login.page.html',
})
export class LoginPage {
  private readonly router = inject(Router);
  protected readonly showPassword = signal(false);

  protected togglePassword(): void {
    this.showPassword.update(value => !value);
  }

  protected createAccount(): void {
    this.router.navigate(['/register']);
  }

  protected login(): void {
    this.router.navigate(['**']);
  }

  protected socialLogin(provider: 'google' | 'apple' | 'facebook'): void {
    // TODO: Implement OAuth login
    console.log(`Login with ${provider}`);
    this.router.navigate(['**']);
  }
}
