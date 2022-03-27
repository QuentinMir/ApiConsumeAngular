import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user!: User;

  constructor(private authService: AuthService, private router: Router) {

  }

  logout(): void{
    this.authService.doLogout();
    this.router.navigate(["/login"])
  }

  ngOnInit(): void {
    this.authService.getUserProfile().subscribe(data => {
      this.user = data;
    })
  }

}
