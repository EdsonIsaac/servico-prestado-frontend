import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentUser!: any;

  constructor(private authService : AuthService, private router : Router) {
    this.currentUser = authService.getCurrentUser();
  }

  ngOnInit(): void {
    
  }

  logout () {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}