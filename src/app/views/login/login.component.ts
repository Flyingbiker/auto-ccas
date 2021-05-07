import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/login';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login : Login ={
    username : '', 
    password : ''    
  } ;
  
  public authStatus : Boolean;

  public loginForm = new FormGroup({
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService,
              private router : Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  public onSignIn() {
    if (this.loginForm.value.username !== null && this.loginForm.value.password !== null){
      this.login.username = this.loginForm.value.username;
      this.login.password = this.loginForm.value.password;
      
      if ( this.authService.signIn(this.login) ) {
        this.authStatus = true;
        this.router.navigate(['dashboard-pro']);
      }
    }
    console.log(this.authStatus, this.loginForm.value);
    
  }

}