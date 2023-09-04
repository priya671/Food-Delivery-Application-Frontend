import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../class/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  baseUrl:string="http://localhost:9999";
  constructor(private http:HttpClient) { }

  getAdminByEmail(customeremail:string,password:string){
    return this.http.get<Admin>(`${this.baseUrl}/getAdminByusername/${customeremail}/${password}`);
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticateuser');
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem("authenticateuser");
  }
}
