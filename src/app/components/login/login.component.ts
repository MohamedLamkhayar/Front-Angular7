import { AccountService } from './../../services/account.service';
import { TokenService } from './../../services/token.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm = new FormGroup(
  {
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(9), Validators.maxLength(11)])
  }
);
  constructor(private authService: AuthService,
     private tokenService: TokenService,
     private accountService: AccountService,
     private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.authService.login(this.loginForm.value).subscribe(res => this.handleResponse(res))
  }
  handleResponse(res) {
    this.tokenService.handle(res);
    this.accountService.changeStatus(true);
    this.router.navigateByUrl("/address");

  }
}
