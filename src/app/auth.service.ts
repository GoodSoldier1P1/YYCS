import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStatusListener = new BehaviorSubject<boolean>(false);

  constructor(
    private auth: Auth,
    private router: Router,
  ) { }

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
}