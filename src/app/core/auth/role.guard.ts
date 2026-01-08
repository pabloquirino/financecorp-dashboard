import { inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthStore } from './auth.store';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authStore = inject(AuthStore);
  const router = inject(Router);

  const requiredRole = route.data['role'] as 'ADMIN' | 'USER';

  if (!authStore.isAuthenticated()) {
    return router.createUrlTree(['/login']);
  }

  if (authStore.role() === requiredRole) {
    return true;
  }

  return router.createUrlTree(['/dashboard']);
};
