import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  title = "navbar";
  constructor(
    private router: Router
  ) { }

  homeClick() {
    this.router.navigate(['']);
  };

  aboutClick() {
    this.router.navigate(['/about']);
  };

  productsClick() {
    this.router.navigate(['/product']);
  };

  onLogin() {
    this.router.navigate(['/login']);
  };

  onSignup() {
    this.router.navigate(['/signup']);
  };
}