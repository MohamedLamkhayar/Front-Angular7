import { TokenService } from './../../../services/token.service';
import { AccountService } from './../../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: null;
  constructor(private accountService: AccountService,
              private tokenService: TokenService,
              private router: Router) { }

  //Chargement du NavbarComponent  
  ngOnInit(): void {
    this.accountService.authStatus.subscribe(res => {
        this.currentUser = this.tokenService.getInfos();
    })
  }
  logout() {
    this.tokenService.remove();
    this.accountService.changeStatus(false);
    this.router.navigateByUrl("/login");
  }
}
