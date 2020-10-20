import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthorizeService } from '../service/hardcoded-authorize.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name = 'cylixx'
  pwd = 'dummy'
  invalidLogin = false

  constructor(
    private hardcodedAuthorizeService: HardcodedAuthorizeService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(){
    if(this.hardcodedAuthorizeService.authenticate(this.name, this.pwd)) {
      this.router.navigate(['home']);  //Redirect to Welcome Page
      this.invalidLogin = false
    } else{
      this.invalidLogin = true
      console.log('Invalid credentials...')
    }
  }
}
