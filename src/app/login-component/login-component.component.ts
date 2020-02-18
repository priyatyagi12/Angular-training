import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationComponentComponent } from '../registration-component/registration-component.component';


export class LoginDTO {
  email: string;
  pwd: string;
}

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  private loginDTO: LoginDTO = new LoginDTO();

  constructor(private route: Router) { }

  ngOnInit() {
  }

  login(){
    let userList = JSON.parse(localStorage.getItem('userList'));

    let user = userList.filter(i => i.email == this.loginDTO.email && i.pwd == this.loginDTO.pwd);


    if(user.length > 0)
    {
      localStorage.setItem('currentUser',JSON.stringify(user));
    this.route.navigate(['/dashboard']);
    }
    else
    alert('Not Authorised');
  }

  signUp(){
    this.route.navigate(['/register']);
  }
}
