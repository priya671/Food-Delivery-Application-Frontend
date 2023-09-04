import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {

  intitalQuantity:number=1;
  email:any;
  constructor( @Inject (MAT_DIALOG_DATA) public data:any,
  private matdialogref:MatDialogRef<QuantityComponent>,
  private orderservice:OrderService,
  private customerService:CustomerService
  ) { }

  ngOnInit(
  ): void {
  }

  addToCart(){
    console.log(this.data);
    
    this.email = sessionStorage.getItem('authenticateduser');
    console.log(this.email);
      
    this.customerService.getCustomerByEmail(this.email).subscribe((customerData) => {
      
    this.orderservice.saveOrder(customerData.customerid,this.data.restId,this.data.itemId,this.intitalQuantity).subscribe(order=>{
      console.log(order);
    },
    (error)=>{
      console.log(error);
    })
    alert("item with quantity "+this.intitalQuantity+" is added to cart");
    this.matdialogref.close();
  });

  }

  close(){
    this.matdialogref.close();
  }
  increase(){
    this.intitalQuantity++;
    }
    decrease(){
      if(this.intitalQuantity>1){
        this.intitalQuantity--;
      }
      
    }
}
