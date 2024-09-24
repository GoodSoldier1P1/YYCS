import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  private authStatusListener = new BehaviorSubject<boolean>(false);

  constructor(
    private auth: Auth,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.initializeAuthState();
  }

  private initializeAuthState() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.user = user;
        this.authStatusListener.next(true);
        this.router.navigate(['/product']);
        console.log('auth.service Line 30 If statement',user)
      } else {
        this.user = null;
        this.authStatusListener.next(false);
        this.router.navigate(['/login']);
        console.log('auth.service Line 35 Else statement', user)
      }
    });
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  isAuthenticated(): boolean {
    return !!this.user;
  }

  async signup(email: string, password: string) {
    await createUserWithEmailAndPassword(this.auth, email, password);
    this.router.navigate(['/login']);
    console.log('User Signup Successful')
  }

  async login(email: string, password: string) {
    await signInWithEmailAndPassword(this.auth, email, password);
    this.authStatusListener.next(true);
    this.router.navigate(['/']);
    console.log('User Signed in');
  }

  async logout() {
    await signOut(this.auth);
    this.authStatusListener.next(false);
    this.router.navigate(['/login']);
    console.log('User No Longer Signed In')
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