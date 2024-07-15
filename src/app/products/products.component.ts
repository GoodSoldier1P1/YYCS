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
      imageUrl: 'DadTough1.jpg',
      price: '19.99'
    },
    {
      name: 'MousePads',
      description: 'Is your deskspace feeling dull? Don\'t worry! With our custom mousepads we will get your desk back to amazing!',
      imageUrl: 'Cow.jpg',
      price: '9.99'
    },
    {
      name: 'KeyChains',
      description: 'Looking to add some eye catching designs to your keyrings? With these custom keychains we\'ve got you covered!',
      imageUrl: 'Keychains.jpg',
      price: '1.99'
    },
    {
      name: 'Wind Spinners',
      description: 'Want to add some design outside? With our custom wind spinners you will be able to upgrade your porch time!',
      imageUrl: 'Tree.jpg',
      price: '6.99'
    },
    {
      name: 'Tumblers',
      description: '',
      imageUrl: 'TwistedMan.jpg',
      price: '19.99'
    },
    {
      name: 'Lanyard',
      description: '',
      price: '2.99'
    },
    {
      name: 'Water Bottles',
      description: '',
      price: '14.99'
    },
    {
      name: 'Make-up Bags',
      description: '',
      price: '9.99'
    },
    {
      name: 'Earrings',
      description: '',
      price: '2.99'
    },
    {
      name: 'Chapstick Holder',
      description: '',
      price: '1.99'
    },
    {
      name: 'Phone Cases',
      description: '',
      price: '9.99'
    },
    {
      name: 'Baby Clothes',
      description: '',
      price: '9.99'
    },
    {
      name: 'Pillow Cases',
      description: '',
      price: '8.99'
    },
    {
      name: 'Can Koozie',
      description: '',
      price: '3.99'
    },
    {
      name: 'Mugs',
      description: '',
      price: '7.99'
    },
    {
      name: 'Coasters',
      description: '',
      price: '6.99'
    },
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
