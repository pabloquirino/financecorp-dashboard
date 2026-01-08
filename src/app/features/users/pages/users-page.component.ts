import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Users</h1>
    <p>Manage system users</p>
  `
})
export class UsersPageComponent {}
