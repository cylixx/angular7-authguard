import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(private http: HttpClient) { }

  authenticate(username, password) {
    // return this.http.post('http://localhost:8080/authenticate', {"username":username, "password":password})
    // .toPromise()
    // .then(function(res){
    //   return res;
    // })
    // .catch((error)=>{
    //   console.log(error);
    // })

  }

}
