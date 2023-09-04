import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../class/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerdataService {

  baseUrl:string="http://localhost:9999";
  constructor(private http:HttpClient) { }

  retriveAllCustomer(){
    return this.http.get<Customer[]>
      (`${this.baseUrl}/getAllCustomer`);
  }
  getCustomerById(id:number){
    return this.http.get<Customer>
    (`${this.baseUrl}/getCustomerById/${id}`);
  }

  deleteCustomerById(id:number){
    return this.http.delete<Customer[]>
      (`${this.baseUrl}/deleteCustomerById/${id}`)
  }

  updateCustomerById(id:number, customer:Customer){
    return this.http.put<Customer>
      (`${this.baseUrl}/updateCustomerById/${id}`,customer)
  }
}