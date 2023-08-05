import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/class/cart';
import { Item } from 'src/app/class/item';
import { Order } from 'src/app/class/order';
import { Restaurant } from 'src/app/class/restaurant';
import { CartService } from 'src/app/service/cart.service';
import { DataRestaurantService } from 'src/app/service/data-restaurant.service';
import { OrderService } from 'src/app/service/order.service';
import { PreviousOrderrestaurantComponent } from '../previous-orderrestaurant/previous-orderrestaurant.component';

@Component({
  selector: 'app-restaurant-data',
  templateUrl: './restaurant-data.component.html',
  styleUrls: ['./restaurant-data.component.css']
})
export class RestaurantDataComponent {
  p: number = 1;
  count: number = 4;
  id:number;
  // cartList:any[]=[];
  restaurants:Restaurant[]=[];
  itemList:Item[]=[];

  constructor(private restrservice:DataRestaurantService
    ,private router:Router
    , private route:ActivatedRoute
    ,private matDialog:MatDialog){}
  ngOnInit(): void {
    this.restrservice.retriveAllRestaurant().subscribe(
      response =>{
        this.restaurants = response;
        console.log(this.restaurants);
      }
    )
  }

  restupdate(id:number){
    this.router.navigate(['restaurantEdit',id]);
  }
  restdelete(id:number){
    this.id=this.route.snapshot.params['id'];

    this.restrservice.deleterest(id).subscribe(
      respose=>{
        this.restaurants=respose;
        console.log(this.restaurants);
      } 
    );
  }

  viewItems(id:number){
    this.router.navigate(['item',id]);
  }

  viewOrder(restId:number){
    console.log(restId);
    this.matDialog.open(PreviousOrderrestaurantComponent,{
      width:'120vh',
      height:'90vh',
      data:restId
    })
    
  }

}
