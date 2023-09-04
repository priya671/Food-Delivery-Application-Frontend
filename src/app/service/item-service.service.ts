import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../class/item';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  baseUrl:string="http://localhost:9999";
  constructor(private http:HttpClient) { }

  retriveAllItem(){
    return this.http.get<Item[]>(`${this.baseUrl}/getAllItems`);
  }

  getItemByRestId(id:number){
    return this.http.get<Item[]>(`${this.baseUrl}/getItemByRestId/${id}`);

  }
  saveItem(item:any){
    return this.http.post(`${this.baseUrl}/saveItem`,item);
  }

  saveItemByRestId(id:number, item:any){
    return this.http.post(`${this.baseUrl}/saveItemByRestIdi/${id}`,item);
  }

  updateItemById(id:number,item:Item){
    return this.http.put<Item>(`${this.baseUrl}/updateItemById/${id}`,item);
  }

  deleteItem(id:number,rid:number){
    return this.http.delete<Item[]>(`${this.baseUrl}/deleteItemById/${id}/${rid}`);
  }

  getItemById(id:number){
    return this.http.get<Item>(`${this.baseUrl}/getItemById/${id}`);
  }
}
