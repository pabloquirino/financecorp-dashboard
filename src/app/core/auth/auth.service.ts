import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from './auth.model';

interface MockUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'ADMIN' | 'USER';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: MockUser[] = [
    {
      id: '1',
      name: 'Admin User',
      email: 'admin@corp.com',
      password: '123456',
      role: 'ADMIN'
    },
    {
      id: '2',
      name: 'Regular User',
      email: 'user@corp.com',
      password: '123456',
      role: 'USER'
    }
  ];

  login(email: string, password: string): Observable<User> {
    const found = this.users.find(
      u => u.email === email && u.password === password
    );

    if (!found) {
      return throwError(() => new Error('Invalid credentials'));
    }

    const user: User = {
      id: found.id,
      name: found.name,
      email: found.email,
      role: found.role,
      token: 'fake-jwt-token'
    };

    return of(user).pipe(delay(800));
  }

}
