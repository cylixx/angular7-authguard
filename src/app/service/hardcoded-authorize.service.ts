import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthorizeService {

  constructor(private http: HttpClient) { }

  authenticate(username, password) {
    if(username==='cylixx' && password==='dummy') {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser');
  }

}
