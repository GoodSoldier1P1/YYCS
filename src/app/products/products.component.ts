import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  title = 'products';
  constructor(
    private router: Router,
  ) {}

  onSubmitHome() {
    this.router.navigate(['/'])
  }

  onSubmitAbout() {
    this.router.navigate(['/about'])
  }
}
