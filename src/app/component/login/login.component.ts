import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';
import { Customer } from '../register/register.component';
import { LoginService } from 'src/app/service/login.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminLoginService } from 'src/app/service/admin-login.service';
import { Admin } from 'src/app/class/admin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  loginData: { restloginemail: string, restloginpassword: string, role:string } = {

    restloginemail: '',
   
    restloginpassword: '',
    
    role : ''
   
   };

   roles : string[];
   role: string;

   
   
   
    constructor(public dialog: MatDialogRef<LoginComponent>,private hardcodedAuthentication:HardcodedAuthenticationService,private loginservice: LoginService, private router: Router,private adminloginservice: AdminLoginService) {
      this.roles = [
        'Admin','User'
      ];
     }
   
   
     ClosePopup(){
      this.dialog.close();
    }
    
   
   
    loginValid() {
   
      // this.cust.role = this.role;
      console.log("Inside login");
   
      console.log("***********"+this.loginData.role);

      if(this.loginData.role=='User'){

    this.loginservice.getcustomerByEmail1(this.loginData.restloginemail, this.loginData.restloginpassword)
   
    .subscribe(
   
    (data: Customer) => {
   
    if (data) {
   
      this.hardcodedAuthentication.authenticate(this.loginData.restloginemail,this.loginData.restloginpassword);

      alert("Login Successful!");

      console.log("Login successful!");
 
      this.dialog.close();
     
      // Redirect to AddRestaurant page or any other page you want
     
      this.router.navigate(['restaurant']);
   
    } else {
   
      alert("Login failed");

    console.log("Login failed");
   
    // Handle login failure, show error message, etc.
   
    }
   
    },
   
    error => {
   
    console.error("Login error:", error);
   
    // Handle login error, show error message, etc.
   
    }
   
    );
   
  }

    
  else{

    console.log("Inside login");
      
    this.adminloginservice.getAdminByEmail(this.loginData.restloginemail, this.loginData.restloginpassword).subscribe(
      (data: Admin) => {
      if (data) {
        this.hardcodedAuthentication.authenticateAdmin(this.loginData.restloginemail, this.loginData.restloginpassword);
        alert("Login Successful!")
        console.log("Login successful");
      //sessionStorage.setItem("authenticatedAdmin",this.loginData.restloginemail);
        console.log(data.username);
        this.dialog.close();
        
        this.router.navigate(['customeradmin']);
        
   
    } else {
   
      alert("Login failed");
    console.log("Login failed");
   
    // Handle login failure, show error message, etc.
   
    }
   
    },
   
      (    error: any) => {
   
    console.error("Login error:", error);
   
    // Handle login error, show error message, etc.
   
    }
   
    );
  }

    
   }
   
   
   
    

}