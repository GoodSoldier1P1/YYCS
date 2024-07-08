import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Injectable({
  providedIn: 'root'
})
export class ProductModalService {

  constructor(private dialog: MatDialog) { }

  openProductDetail(product: any): void {
    this.dialog.open(ProductDetailComponent, {
      data: product,
      width: '500px'
    })
  }
}
