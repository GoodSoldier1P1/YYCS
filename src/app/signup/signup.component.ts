import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NgIf, FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(
    private authService: AuthService,
    private router: Router,) {}

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.signup(form.value.email, form.value.password);
  }

  loginClick() {
    this.router.navigate(['/login']) // this is a backup redirect in case the href ever messes up.
  }
}
