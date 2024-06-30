import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'home';
  constructor(
    private router: Router,
  ) {}

  onSubmitAbout() {
    this.router.navigate(['/about'])
  }

  onSubmitProducts() {
    this.router.navigate(['/product'])
  }
}