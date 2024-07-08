import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { onAuthStateChanged } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any = null;
  private authStatusListener = new BehaviorSubject<boolean>(false);

  constructor(
    private auth: Auth,
    private router: Router,
    private dialog: MatDialog,
  ) { this.initializeAuthState(); }

  private initializeAuthState() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.user = user;
        this.authStatusListener.next(true);
      } else {
        this.user = null;
        this.authStatusListener.next(false);
      }
    });
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  async signup(email: string, password: string) {
    await createUserWithEmailAndPassword(this.auth, email, password);
    this.router.navigate(['/login']);
  }

  async login(email: string, password: string) {
    await signInWithEmailAndPassword(this.auth, email, password);
    this.authStatusListener.next(true);
    this.router.navigate(['/']);
  }

  async logout() {
    await signOut(this.auth);
    this.authStatusListener.next(false);
    this.router.navigate(['/login']);
  }

  openProductModal(product: any): void {
    const dialogRef = this.dialog.open(ProductDetailComponent, {
      width: '250px',
      data: { title: product.title, description: product.description }
    });
  }

  closeProductModal(): void {
    this.dialog.closeAll();
  }
}