import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwtHelper : JwtHelperService;

  constructor() {
    this.jwtHelper = new JwtHelperService();
  }

  isAuthenticated () : boolean {
    const currentUser = this.getCurrentUser();

    if (currentUser) {
      
      const token = currentUser.token.substring(7);

      if (token) {
        return !this.jwtHelper.isTokenExpired(token);
      }
    }

    return false;
  }

  logout () {
    localStorage.removeItem("currentUser");
  }

  getCurrentUser() : any {
    let currentUser: any = localStorage.getItem("currentUser");

    try {
      currentUser = JSON.parse(currentUser);
      currentUser.username = this.jwtHelper.decodeToken(currentUser.token).sub;
    } catch (error) { }
    
    return currentUser;
  }

  setCurrentUser(currentUser : any) : void {

    if (localStorage.getItem("currentUser")) {
      localStorage.removeItem("currentUser");
    }

    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }
}