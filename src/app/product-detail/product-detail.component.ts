import { Component, HostListener, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  constructor(
    public dialogRef: MatDialogRef<ProductDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    @HostListener('window:keyup.esc') onKeyUp() {
      this.dialogRef.close()
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  orderViaEmail(): void {
    const email = "skamyx22@gmail.com";
    const subject = encodeURIComponent(`Order Request: ${this.data.name}`);
    const body = encodeURIComponent(`I would like to place an order for the product: ${this.data.name}. \n\nPlease contact me for further details`);

    // Open users default email client
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }
}