import { Component, OnInit } from '@angular/core';
import { User } from './shared/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {

  public static users: Array<User> = [];
  private userList: Array<User> = [];
z
  private user: User = new User();
  private currentUser : User = new User();
  private cUsers : Array<User> = new Array<User>();
  constructor(private route: Router) {
     this.cUsers = JSON.parse(localStorage.getItem('currentUser'));
     if(this.cUsers && this.cUsers.length == 1)
     {
      this.currentUser = this.cUsers[0];
      this.user = this.currentUser;
     }
     
   }

  ngOnInit() {
  }

  register() {
    
    this.userList = JSON.parse(localStorage.getItem('userList'));
     if (this.userList && this.userList.length && this.currentUser && this.currentUser.email ) {
     
      this.userList.forEach( (item, index) => {
        if(item.email === this.currentUser.email)
         this.userList.splice(index,1);
      });
     localStorage.setItem('currentUser',JSON.stringify(this.currentUser));
     this.user=this.currentUser
     alert("update Successfully..")
     this.route.navigate(['/login']);
    
      
    }
     else{
       if(!this.userList)
       this.userList = new Array<User>();
       this.userList.push(this.user);
       localStorage.setItem('userList', JSON.stringify(this.userList));
       alert("register Successfully..")
       this.route.navigate(['/login']);

     }
    
  }

}
