import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/class/item';
import { ItemServiceService } from 'src/app/service/item-service.service';


@Component({
  selector: 'app-registereditem',
  templateUrl: './registereditem.component.html',
  styleUrls: ['./registereditem.component.css']
})
export class RegistereditemComponent implements OnInit {
  id:number;

  items : Item[] = [];
  flag = false;

  constructor(private router: Router, 
    private route: ActivatedRoute,
   private data:ItemServiceService){};

  registrationForm = new FormGroup({
    itemname : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+$')]),
    itemstatus: new FormControl('',[Validators.required]),

    // itemstatus : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+$')]),
    itemcost : new FormControl('', [Validators.required]),

    itemimage : new FormControl('', [Validators.required]),
  });


  radioSelectedValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    if (value === null || value === undefined || value === '') {
      return { 'required': true };
    }
    return null;
  }
  

  ngOnInit(): void {
  }

  saveItem(): void {

    this.id=this.route.snapshot.params['id'];

    console.log(this.registrationForm.value)

    const Items = {
      itemname : this.registrationForm.value.itemname,
      itemstatus : this.registrationForm.value.itemstatus,
      itemcost : this.registrationForm.value.itemcost,
      itemimage : this.registrationForm.value.itemimage,
    };
    this.data.getItemByRestId(this.id).subscribe(
      dataItem=>{
        this.items=dataItem;
        for(let i=0; i<this.items.length; i++){
          if(this.items[i].itemname == this.registrationForm.value.itemname){
            this.flag=true;
            break;
          }
        }
        console.log(this.flag);
        if(this.flag==false){
          this.data.saveItemByRestId(this.id,Items).subscribe(
              (response:any) => {
                console.log(response);
                this.router.navigate(['item',this.id]);
              },

                (error:any) => {
                  console.log(error);
                }
          )
        }
        else{
          alert("Item is already registered");
        }
      },
      (error:any)=>{
        console.log(error);
      }
      )
  }

  get itemname() {
    return this.registrationForm.get('itemname');
  }

  get itemstatus() {
    return this.registrationForm.get('itemstatus');
  }

  get itemcost() {
    return this.registrationForm.get('itemcost');
  }
  
  get itemimage() {
    return this.registrationForm.get('itemimage');
  }
}