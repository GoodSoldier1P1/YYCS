import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductModalService } from '../product-modal.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  title = 'products';

  products = [
    {
      name: 'T-Shirts',
      description: 'Show off your personality with our custom sublimated T-shirts. Made from soft, breathable fabric, these shirts feature vibrant, long-lasting designs that make a statement wherever you go.',
      imageUrl: 'DadTough1.jpg',
      price: '19.99'
    },
    {
      name: 'Toddler Clothes',
      description: 'Dress your little one in style with our custom sublimated toddler clothes. Soft, comfortable, and adorned with vibrant, long-lasting designs, these outfits are perfect for playtime or special occasions.',
      imageUrl: 'ToddlerShirt.png',
      price: '9.99'
    },
    {
      name: 'Mouse Pads',
      description: 'Enhance your workspace with our personalized mouse pads. Designed for smooth and precise mouse movement, these durable pads feature unique, high-resolution designs that brighten up any desk.',
      imageUrl: 'Cow.png',
      price: '9.99'
    },
    {
      name: 'Key Chains',
      description: 'Carry a piece of your personality with you everywhere with our custom sublimated key chains. Durable and stylish, these key chains feature vibrant designs that are perfect for keys, bags, or backpacks.',
      imageUrl: 'Keychains.png',
      price: '1.99'
    },
    {
      name: 'Wind Spinners',
      description: 'Add a touch of magic to your outdoor space with our custom sublimated wind spinners. Featuring beautiful, intricate designs that come to life in the breeze, these spinners are perfect for gardens, patios, or porches.',
      imageUrl: 'Tree.png',
      price: '6.99'
    },
    {
      name: 'Tumblers',
      description: 'Stay hydrated in style with our personalized tumblers. Whether you prefer hot or cold beverages, our durable, double-walled tumblers will keep your drinks at the perfect temperature while showcasing your unique design.',
      imageUrl: 'TwistedMan.png',
      price: '19.99'
    },
    {
      name: 'Lanyard',
      description: 'Keep your keys, ID, or badges secure and stylish with our custom lanyards. Made from high-quality materials, these lanyards feature vibrant, fade-resistant designs that make a statement.',
      imageUrl: 'lanyard.png',
      price: '2.99'
    },
    {
      name: 'Water Bottles',
      description: 'Quench your thirst with our personalized water bottles. Crafted for durability and designed for style, these bottles are perfect for the gym, office, or on-the-go hydration.',
      imageUrl: 'WaterBottle.png',
      price: '14.99'
    },
    {
      name: 'Make-up Bags',
      description: 'Organize your cosmetics in a chic and personalized way with our custom makeup bags. Spacious and durable, these bags feature vibrant designs that make them as stylish as they are functional.',
      imageUrl: 'MakeupBag.png',
      price: '9.99'
    },
    {
      name: 'Earrings',
      description: 'Add a personal touch to your jewelry collection with our custom sublimated earrings. Lightweight and comfortable, these earrings feature unique, eye-catching designs that express your individuality.',
      imageUrl: 'earrings.png',
      price: '2.99'
    },
    {
      name: 'Chapstick Holder',
      description: 'Never lose your lip balm again with our custom chapstick holders. These handy accessories attach easily to your keys or bag, featuring bright and personalized designs to match your style.',
      imageUrl: 'ChapstickHolder.png',
      price: '1.99'
    },
    {
      name: 'Phone Cases',
      description: 'Protect your phone with our custom sublimated cases. Durable and stylish, these cases feature high-resolution designs that won\'t fade, ensuring your phone looks great while staying safe.',
      imageUrl: 'phonecase.png',
      price: '9.99'
    },
    {
      name: 'Baby Clothes',
      description: 'Dress your baby in adorable, personalized outfits with our custom sublimated baby clothes. Soft and gentle on delicate skin, these clothes feature vibrant designs that make them perfect for any occasion.',
      imageUrl: 'babyclothes.png',
      price: '9.99'
    },
    {
      name: 'Pillow Cases',
      description: 'Add a touch of personality to your home decor with our custom sublimated pillow cases. Made from soft, durable fabric, these pillow cases showcase your unique designs in vivid detail.',
      imageUrl: 'pillowcase.png',
      price: '8.99'
    },
    {
      name: 'Can Koozie',
      description: 'Keep your drinks cold and your hands dry with our custom can koozies. Perfect for parties, picnics, or just relaxing at home, these koozies feature personalized designs that stand out.',
      imageUrl: 'koozies2.png',
      price: '3.99'
    },
    {
      name: 'Mugs',
      description: 'Start your day with a smile and a custom sublimated mug. Whether it\'s coffee, tea, or cocoa, these mugs feature vibrant designs that make every sip special.',
      imageUrl: 'mug.png',
      price: '7.99'
    },
    {
      name: 'Coasters',
      description: 'Protect your surfaces in style with our custom sublimated coasters. Durable and absorbent, these coasters feature unique designs that add a personal touch to any space.',
      imageUrl: 'coaster.png',
      price: '6.99'
    },
    {
      name: 'Stickers',
      description: 'Express yourself with our custom sublimated stickers. Perfect for laptops, notebooks, or any flat surface, these stickers are made from high-quality materials and feature vibrant, lasting designs.',
      imageUrl: 'sticker.png',
      price: '4.99'
    },
    {
      name: 'Car Decals',
      description: 'Personalize your ride with our custom car decals. Easy to apply and remove, these decals feature eye-catching designs that make your vehicle stand out on the road.',
      imageUrl: '',
      price: '4.99'
    },
  ]

  constructor(
    private router: Router,
    private productModalService: ProductModalService,
    private authService: AuthService,
  ) { }

  get isLoggedIn() {
    return !!this.authService.user;
  }

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
