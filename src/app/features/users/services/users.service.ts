import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface UserItem {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'USER';
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  getUsers(): Observable<UserItem[]> {
    return of<UserItem[]>([
      { id: '1', name: 'Admin User', email: 'admin@corp.com', role: 'ADMIN' },
      { id: '2', name: 'Regular User', email: 'user@corp.com', role: 'USER' }
    ])
  }

  getUsersWithError(): Observable<UserItem[]> {
    return throwError(() => new Error('Failed to load users')).pipe(delay(1000));
  }
}
