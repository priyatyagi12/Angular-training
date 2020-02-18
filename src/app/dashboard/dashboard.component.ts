import { Component, OnInit } from '@angular/core';
import { RegistrationComponentComponent } from '../registration-component/registration-component.component';
import { User } from '../registration-component/shared/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

  private userList: Array<User> = new Array<User>();
  private currentUser: User = new User();
  constructor(private route: Router) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.getUsers();
  }

  


  getUsers(){
    this.userList = JSON.parse(localStorage.getItem('userList'));
    // this.userList = RegistrationComponentComponent.users;
  }

  logout(){
    this.route.navigate(['/login']);
  }

  edit(){
this.route.navigate(['/register']);
  }
}
