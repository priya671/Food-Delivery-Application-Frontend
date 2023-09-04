import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../component/homePage/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl:string="http://localhost:9999";
  constructor(private http:HttpClient) { }

  addCustomer(customer:Customer){
    return this.http.post<Customer>(`${this.baseUrl}/saveCustomer`,customer);
  }

  getcustomerByEmail1(customeremail:string,password:string){
    return this.http.get<Customer>(`${this.baseUrl}/getCustomerByEmail/${customeremail}/${password}`);
  }
}
