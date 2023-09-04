import { Injectable } from '@angular/core';
import { Item } from '../class/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  baseUrl:string="http://localhost:9999";
  constructor(private http:HttpClient) { }
  retriveAllItem(){
    return this.http.get<Item[]>(`${this.baseUrl}/getAllItems`);
  }

  getItemByRestId(id:number){
    return this.http.get<Item[]>(`${this.baseUrl}/getItemByRestId/${id}`);
  }

  getItemById(id:number){
    return this.http.get<Item[]>(`${this.baseUrl}/getItemById/${id}`); 

  }
  addItemToResById(id:Number,item:Item){
      return this.http.post<Item[]>(`${this.baseUrl}/saveItemByRestId/${id}`,item);
    }

  assignItemToRestById(restId:number,itemId:number){
    return this.http.get<Item[]>(`${this.baseUrl}/itemAssignedRestaurant/item/${itemId}/restaurant/${restId}`);
  }
}
