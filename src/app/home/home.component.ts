import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthorizeService } from '../service/hardcoded-authorize.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username;

  constructor(
    private hardcodedAuthorizeService: HardcodedAuthorizeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('authenticaterUser');
  }

  gotoChild() {
    this.router.navigate(['home/ch']);
  }

  logout(){
    this.hardcodedAuthorizeService.logout();
    this.router.navigate(['login']);
  }
}
