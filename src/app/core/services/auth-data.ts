import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../interface/login';

@Injectable({
  providedIn: 'root'
})
export class AuthData {

  constructor(private _httpclient:HttpClient) { }

  login(data:Login){
    return this._httpclient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',data);
  }

  authorize() :boolean{
    if(localStorage.getItem('userToken')){
      return true
    } else {
      return false
    }
  }
}
