import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DummyPayment } from 'src/app/class/dummy-payment';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderService } from 'src/app/service/order.service';
import { PaymentSuccessComponent } from '../payment-success/payment-success.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

  email: any;
  cartDetails={};
  newCart={};
  customerId:number;
  totalAmountToPay:any;
  order:any[]=[];
  
  constructor(
    private dialog:MatDialog,
    private customerService:CustomerService,
    private ref:MatDialogRef<PaymentComponent>,
    private orderService:OrderService,
    @Inject(MAT_DIALOG_DATA) public data:any)
    { 
      this.totalAmountToPay=data
    }

  ngOnInit(): void {
    this.email = sessionStorage.getItem('authenticateduser');
    console.log(this.email);

    this.customerService.getCustomerByEmail(this.email).subscribe(customerData => {
   
      this.orderService.getOrderByCustomerIdAndStatusUnpaid(customerData.customerid).subscribe(Order=>{
        console.log(Order);
        this.order=(Order);
        
      })
    });

    
  }

  cardDatils = new FormGroup({
    personName:  new FormControl('',[Validators.required,Validators.minLength(5)]),
    cardNum:  new FormControl('',[
      Validators.required,Validators.
      minLength(16),Validators.maxLength(16)
    ]),
    expiryDate:  new FormControl('',[Validators.required]),
    cvv:  new FormControl('',[Validators.required]),
  })



  payment(){
    if(
      this.cardDatils.get('personName')?.value == DummyPayment.personName &&
      this.cardDatils.get('cardNum')?.value == DummyPayment.cardNum &&
      this.cardDatils.get('expiryDate')?.value == DummyPayment.expiryDate &&
      this.cardDatils.get('cvv')?.value == DummyPayment.cvv
    ){
       
    this.email = sessionStorage.getItem('authenticateduser');
    console.log(this.email);
    this.dialog.open(PaymentSuccessComponent,{
          
      height:'73vh',
      width:'70vh'  
    });
    this.ref.close();
    alert("Payment Sucessful!");
    
    for(let i=0;i<=this.order.length;i++){
      
      this.orderService.updateOrderStatus(this.order[i].orderid).subscribe(updatedOrder=>{
        console.log(updatedOrder);
      },
      (error:any)=>{
        console.log(error);
      });
    }
  }
    else{
      alert("Oops! Invalid card details");
    }
   
  }
  validCardDetails(){
    
  }
}
