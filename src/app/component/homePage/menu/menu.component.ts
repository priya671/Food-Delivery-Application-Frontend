import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Customer, RegisterComponent } from '../register/register.component';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';
import { Router } from '@angular/router';
import { DataRestaurantService } from 'src/app/service/data-restaurant.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Restaurant } from 'src/app/class/restaurant';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{

  restaurant:Restaurant[]=[];
  email:any;
  customer:any;
  email1:any;
  isUserLoggedIn:boolean=false;
  restaurant2:any;
  isRestLoggedIn:boolean=false;

  constructor(private restaurantservice:DataRestaurantService,
    private customerService:CustomerService,
    private dialog:MatDialog, public hardcodedAuthentication:HardcodedAuthenticationService,public router:Router){}

  ngOnInit(): void {
    this.getAllRestaurants();
    this.isUserLoggedIn=this.hardcodedAuthentication.isUserLoggedIn();
    this.email = sessionStorage.getItem('authenticateduser');
    console.log(this.email);
    this.customerService.getCustomerByEmail(this.email).subscribe(customer=>{
      console.log(customer);
      this.customer = customer;
    }) 

    this.isRestLoggedIn=this.hardcodedAuthentication.isRestLoggedIn();
    console.log(this.isRestLoggedIn);
    this.email1=sessionStorage.getItem('authenticatedrest');
    console.log(this.email1);
    this.restaurantservice.getRestaurantByEmail2(this.email1).subscribe(restaurant2=>{
      console.log(restaurant2);
      this.restaurant2=restaurant2;
    })
    
   }

   searchByKeyword(searchkeyword: string=""){
    console.log(searchkeyword)
    this.restaurant = [];
    this.getAllRestaurants(searchkeyword);
   } 

   public getAllRestaurants(searchkeyword:string=""){
    this.restaurantservice.getAllRestaurant(searchkeyword)
    .subscribe(
      (response:Restaurant[])=>{
        console.log("**********"+response);
        response.forEach((res)=>this.restaurant.push(res));
        console.log('msg',this.restaurant);
        this.restaurantservice.setRestaurantData(this.restaurant);
      }
      ,(error: HttpErrorResponse)=>{
        console.log(error);
      }
    )
   }


  //for login popup
  Openpopup(){
    this.dialog.open(LoginComponent,{
      width:'50%',
      height:'500px'
    })
  }

  //for sign in popup
  Openpopup2(){
    this.dialog.open(RegisterComponent,{
      width:'50%',
      height:'500px'
    })
  }

  customerview(){ 
    this.router.navigate(['customeradmin']); 
  }
  resturantview(){
    this.router.navigate(['restaurantadmin'])
  }

  adminlogout(){
    sessionStorage.removeItem("authenticatedadmin");
    sessionStorage.removeItem("authenticateduser");
    sessionStorage.removeItem("authenticatedrest");
    this.router.navigate(['']);
  }

  customerManage(){
    
    if(this.hardcodedAuthentication.isUserLoggedIn()){
        console.log(this.customer.customerid);
        this.router.navigate(['customerEdit',this.customer.customerid]);
      }
      
      if(this.hardcodedAuthentication.isRestLoggedIn()){
         this.email1 = sessionStorage.getItem('authenticatedrest');
        console.log(this.email1);
        this.restaurantservice.getRestaurantByEmail(this.email1).subscribe(restaurantId=>{
          console.log(restaurantId);
          this.router.navigate(['restaurantEdit',restaurantId])
        })
      }
  }  
}
