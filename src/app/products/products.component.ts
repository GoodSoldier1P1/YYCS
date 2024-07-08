import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductModalService } from '../product-modal.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  title = 'products';
  
  products = [
    {
      name: 'T-Shirts',
      description: 'Custom made T-Shirts! \nHave a special event coming up? Or even just a special day? We will make you a shirt for any moment!',
      imageUrl: 'DadTough1.jpg'
    },
    {
      name: 'MousePads',
      description: 'Is your deskspace feeling dull? Don\'t worry! With our custom mousepads we will get your desk back to amazing!',
      imageUrl: 'Cow.jpg'
    },
    {
      name: 'KeyChains',
      description: 'Looking to add some eye catching designs to your keyrings? With these custom keychains we\'ve got you covered!',
      imageUrl: 'Keychains.jpg'
    },
    {
      name: 'Wind Spinners',
      description: 'Want to add some design outside? With our custom wind spinners you will be able to upgrade your porch time!',
      imageUrl: 'Tree.jpg'
    }
  ]

  constructor(
    private router: Router,
    private productModalService: ProductModalService,
    private authService: AuthService,
  ) {}

  onSubmitHome() {
    this.router.navigate(['/'])
  }

  onSubmitAbout() {
    this.router.navigate(['/about'])
  }

  openProductDetail(product: any): void {
    this.productModalService.openProductDetail(product);
  }
}
