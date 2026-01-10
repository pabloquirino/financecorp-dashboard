import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService, UserItem } from '../services/users.service';
import { Observable, catchError, map, of, startWith } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-page.component.html'
})
export class UsersPageComponent {

  users$: Observable<{
    data: UserItem[] | null;
    error: string | null;
  }>;

  constructor(private usersService: UsersService) {
    this.users$ = this.usersService.getUsers().pipe(
      map(users => ({
        data: users,
        error: null
      })),
      startWith({
        data: null,
        error: null
      }),
      catchError(err =>
        of({
          data: null,
          error: err.message
        })
      )
    );
  }
}
