import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-change-password',
  imports: [ReactiveFormsModule,CardModule,FloatLabelModule,ButtonModule, CommonModule],
  templateUrl: './change-password.html',
  styleUrl: './change-password.scss'
})
export class ChangePassword {

  showPasswordSection = false;

  resetPasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      otp: [''],
      newPassword: [''],
      confirmPassword: ['']
    });
  }

  sendOtp(): void {

    const email = this.resetPasswordForm.get('email')?.value;

    if (!email) {
      this.resetPasswordForm.get('email')?.markAsTouched();
      return;
    }

    console.log('OTP sent to:', email);

    // Call Send OTP API here

    this.showPasswordSection = true;

    this.resetPasswordForm.get('otp')?.setValidators([
      Validators.required
    ]);

    this.resetPasswordForm.get('newPassword')?.setValidators([
      Validators.required,
      Validators.minLength(8)
    ]);

    this.resetPasswordForm.get('confirmPassword')?.setValidators([
      Validators.required
    ]);

    this.resetPasswordForm.get('otp')?.updateValueAndValidity();
    this.resetPasswordForm.get('newPassword')?.updateValueAndValidity();
    this.resetPasswordForm.get('confirmPassword')?.updateValueAndValidity();
  }

  changePassword(): void {

    const otp = this.resetPasswordForm.get('otp')?.value;
    const newPassword = this.resetPasswordForm.get('newPassword')?.value;
    const confirmPassword = this.resetPasswordForm.get('confirmPassword')?.value;

    if (!otp || !newPassword || !confirmPassword) {
      this.resetPasswordForm.markAllAsTouched();
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const payload = {
      email: this.resetPasswordForm.get('email')?.value,
      otp,
      newPassword
    };

    console.log('Reset Password Payload', payload);

    // Call Change Password API here
  }
}