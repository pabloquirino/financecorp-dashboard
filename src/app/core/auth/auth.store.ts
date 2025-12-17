import { computed, effect, signal } from '@angular/core';
import { User } from './auth.model';

const USER_STORAGE_KEY = 'auth_user';

export class AuthStore {
  user = signal<User | null>(this.loadUser());

  isAuthenticated = computed(() => !!this.user());
  role = computed(() => this.user()?.role ?? null);

  constructor() {
    effect(() => {
      const user = this.user();
      if (user) {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(USER_STORAGE_KEY);
      }
    });
  }

  login(user: User) {
    this.user.set(user);
  }

  logout() {
    this.user.set(null);
  }

  private loadUser(): User | null {
    const stored = localStorage.getItem(USER_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  }
}
