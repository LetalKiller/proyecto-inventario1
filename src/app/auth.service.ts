import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser: string | null = null;

  setLoggedInUser(user: string) {
    this.loggedInUser = user;
  }

  getLoggedInUser(): string | null {
    return this.loggedInUser;
  }
}