import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationComponentComponent } from '../registration-component/registration-component.component';
import { LoggedinService } from '../shared/logged-in.service';


export class LoginDTO {
  email: string;
  pwd: string;
}

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent  {

  private loginDTO: LoginDTO = new LoginDTO();
  isLoggedIn: boolean;
  
  constructor(private route: Router, private loggedInService: LoggedinService) { }


  login()
  {
    let userList = JSON.parse(localStorage.getItem('userList'));
    if(userList){
    let user = userList.filter(i => i.email == this.loginDTO.email && i.pwd == this.loginDTO.pwd);
    if(user.length > 0)
    {
      localStorage.setItem('currentUser',JSON.stringify(user));
      this.loggedInService.enableLoggedIn()
      .subscribe((isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
        this.route.navigate(['/dashboard']);
        
        
    });
    }
  }
   
  }

  signUp()
  {
    this.route.navigate(['/register']);
  }
}
