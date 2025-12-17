import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(email: string, password: string): Observable<User> {
    if (email === 'admin@corp.com' && password === '123456') {
      return of<User>({
        id: '1',
        name: 'Admin User',
        email,
        role: 'ADMIN',
        token: 'fake-jwt-token'
      }).pipe(delay(800));
    }

    return throwError(() => new Error('Invalid credentials'));
  }
}
