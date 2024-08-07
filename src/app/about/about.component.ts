import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  title = 'about';
  constructor(
    private router: Router,
  ) {}

  onSubmitHome() {
    this.router.navigate(['/'])
  }

  onSubmitProducts() {
    this.router.navigate(['/product'])
  }
}
