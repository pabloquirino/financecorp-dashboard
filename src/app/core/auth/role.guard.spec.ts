import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { runInInjectionContext } from '@angular/core';
import { authGuard } from './auth.guard';
import { AuthStore } from './auth.store';

describe('AuthGuard', () => {
  let authStore: AuthStore;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthStore,
        {
          provide: Router,
          useValue: {
            createUrlTree: jasmine.createSpy('createUrlTree')
          }
        }
      ]
    });

    authStore = TestBed.inject(AuthStore);
    router = TestBed.inject(Router);
  });

  it('should allow access when authenticated', () => {
    spyOn(authStore, 'isAuthenticated').and.returnValue(true);

    const result = runInInjectionContext(TestBed, () =>
      authGuard({} as any, {} as any)
    );

    expect(result).toBeTrue();
  });

  it('should redirect to login when not authenticated', () => {
    spyOn(authStore, 'isAuthenticated').and.returnValue(false);

    runInInjectionContext(TestBed, () =>
      authGuard({} as any, {} as any)
    );

    expect(router.createUrlTree).toHaveBeenCalledWith(['/login']);
  });
});
