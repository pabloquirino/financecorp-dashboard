import { Routes } from '@angular/router';
import { roleGuard } from '../../core/auth/role.guard';

export const USERS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/users-page.component')
        .then(m => m.UsersPageComponent),
    canActivate: [roleGuard],
    data: { role: 'ADMIN' }
  }
];
