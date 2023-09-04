import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cartId:number;
  cart1 = { };

  customername:string="";
  customermobilenumber:string='';
  customeremail:string="";
  password:string="";
  successmessage:string="";
  cust:Customer=new Customer(this.customername,this.customermobilenumber,this.customeremail,this.password);

  constructor(public dialog: MatDialogRef<RegisterComponent>,
    private loginservice:LoginService,
    private route:ActivatedRoute,){}

  ngOnInit(): void {
    this.customername=this.route.snapshot.params['customername']; //to take url id 
    
    this.cust=new Customer(this.customername,this.customermobilenumber,this.customeremail,this.password);
  }

  saveCustomer(){
    console.log("Inside register"+this.customername);
    this.loginservice.addCustomer(this.cust).subscribe(
      (customer:Customer)=>{
        if(customer){
          this.cust=customer;
          console.log(customer);
          this.successmessage="Registration Successful! Please Login";
          alert("Registration Successful!")
          this.dialog.close();
          console.log(this.cust);
        }
        else{
          console.log("Email address already exists!");
          alert("Email address already exists!");
        } 
      },
      (error: any) => {
        console.error("Registration error:", error);
        alert("Email address already exists!");
      }
    );
  }
}





export class Customer{
  // [x: string]: any;
  // role : string = '';
  constructor(public customername:string, public customermobilenumber:string, public customeremail:string, public password:string){}
}