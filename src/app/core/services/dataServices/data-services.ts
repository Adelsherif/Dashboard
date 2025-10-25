import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from '../../apiRoute/baseURL';

@Injectable({
  providedIn: 'root'
})
export class DataServices {


  constructor(private httpclient:HttpClient) { }

  getAllProducts() {
    return this.httpclient.get(`${baseURL}/api/v1/products`)
  }

  addUser(data:{}) {
    return this.httpclient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,data)
  }

  getAllUsers() {
    return this.httpclient.get(`${baseURL}/api/v1/users`)
  }

  getAllOrders(){
    return this.httpclient.get(`https://ecommerce.routemisr.com/api/v1/orders/`)
  }
}
