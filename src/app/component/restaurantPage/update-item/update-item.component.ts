import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/class/item';
import { ItemServiceService } from 'src/app/service/item-service.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent  implements OnInit {
  
  id:number;
  rid:number;
  item:Item;
  flag = false;
  items : Item[] = [];

  constructor(private router:Router, private itemService:ItemServiceService, private route:ActivatedRoute){};

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];


    console.log(this.id);

    this.item = new Item(this.id,'','',0,'');

    if(this.id!=-1){
      this.itemService.getItemById(this.id).subscribe(
        response => this.item = response
      )
    }
  }

  updateItem(): void {
      this.id = this.route.snapshot.params['id'];
      this.rid = this.route.snapshot.params['rid'];
     

      this.itemService.getItemByRestId(this.rid).subscribe(
        dataItem=>{
          this.items=dataItem;
          for(let i=0; i<this.items.length; i++){
            if(this.items[i].itemname.toLowerCase().replace(/\s+/g, '') == this.item.itemname.toLowerCase().replace(/\s+/g, '')){
              this.flag=true;
              break;
            }
          }
          console.log(this.flag);
          if(this.flag==false){
            this.itemService.updateItemById(this.id,this.item).subscribe(
              data =>{
                this.router.navigate(['item',this.rid]);
                alert("Item Updated");
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
        this.flag = false;
  };

}