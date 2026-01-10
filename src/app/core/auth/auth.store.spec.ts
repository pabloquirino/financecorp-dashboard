import { TestBed } from '@angular/core/testing';
import { AuthStore } from './auth.store';
import { User } from './auth.model';

describe('AuthStore', () => {
    let store: AuthStore;

    const mockUser: User = {
        id: '1',
        name: 'Admin User',
        email: 'admin@corp.com',
        role: 'ADMIN',
        token: 'fake-token'
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthStore]
        });

        localStorage.clear();
        store = TestBed.inject(AuthStore);
    });

    it('should start unauthenticated', () => {
        expect(store.user()).toBeNull();
        expect(store.isAuthenticated()).toBeFalse();
    });

    it('should authenticate user on login', () => {
        store.login(mockUser);

        expect(store.user()).toEqual(mockUser);
        expect(store.isAuthenticated()).toBeTrue();
        expect(store.role()).toBe('ADMIN');
    });

    it('should clear user on logout', () => {
        store.login(mockUser);
        store.logout();

        expect(store.user()).toBeNull();
        expect(store.isAuthenticated()).toBeFalse();
        expect(store.role()).toBeNull();
    });

    it('should remove user from localStorage on logout', () => {
        store.login(mockUser);
        store.logout();

        expect(localStorage.getItem('auth_user')).toBeNull();
    });
});
