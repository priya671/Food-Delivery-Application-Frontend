import { Component } from '@angular/core';
import { Restaurant } from '../../restaurantPage/restaurants/restaurants.component';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';
import { DataRestaurantService } from 'src/app/service/data-restaurant.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  restaurant:Restaurant[]=[];
  isUserLoggedIn:boolean=false;

  constructor(private restaurantservice:DataRestaurantService, public hardcodedAuthentication:HardcodedAuthenticationService,public router:Router){
    console.log('Application loaded. Initializing data.');
  }

  p: number = 1;
  count: number = 6;


 
  ngOnInit(): void {
    this.getAllRestaurants();
    this.isUserLoggedIn=this.hardcodedAuthentication.isUserLoggedIn();
   }

  //  searchByKeyword(searchkeyword: string=""){
  //   console.log(searchkeyword)
  //   this.restaurant = [];
  //   this.getAllRestaurants(searchkeyword);
  //  } 

   public getAllRestaurants(){
    this.restaurantservice.getAllRestaurant()
    .subscribe(
      (response:Restaurant[])=>{
        response.forEach((res)=>this.restaurant.push(res));
        console.log('msg',this.restaurant);
        this.restaurantservice.setRestaurantData(this.restaurant);
      }
      ,(error: HttpErrorResponse)=>{
        console.log(error);
      }
    )
   }

   viewRestaurant(id:number){
    this.router.navigate(['item',id])
  }
  
}