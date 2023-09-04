import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataViewRestaurantService {
  
  baseUrl:string="http://localhost:9999";
  constructor(private http: HttpClient) {}

  addRestaurant(restaurant: any) {
    return this.http.post(`${this.baseUrl}/saveRestaurant`, restaurant);
  }
}
