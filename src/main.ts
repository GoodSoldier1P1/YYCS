import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { browserLocalPersistence, setPersistence } from 'firebase/auth';
import { routes } from './app/app.routes';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from './app/auth.service';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => {
      const auth = getAuth();
      setPersistence(auth, browserLocalPersistence)
        .then(() => {
          console.log(auth)
          return auth;
        })
        .catch((error) => {
          console.error('Failed to set persistence: ', error);
          return auth;
        });
      return auth;
    }),
    importProvidersFrom(MatDialogModule),
    // importProvidersFrom(AngularFireAuthModule),
    AuthService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
    provideAnimationsAsync('noop'),
  ],
}).catch(err => console.error(err));