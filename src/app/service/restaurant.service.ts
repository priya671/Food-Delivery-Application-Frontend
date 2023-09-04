import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../class/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  baseUrl:string="http://localhost:9999";
  constructor(private http: HttpClient) { }
  getrestById(id:number){
    return this.http.get<Restaurant>(`${this.baseUrl}/getRestaurantById/${id}`);
  }
  updaterestById(id:number,rest:Restaurant){
    return this.http.put<Restaurant>(`${this.baseUrl}/updateRestaurantById/${id}`,rest);
  }
}
