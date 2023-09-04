
import { Component } from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';
  import { Restaurant } from '../restaurants/restaurants.component';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';

@Component({
  selector: 'app-restaurantdata-edit',
  templateUrl: './restaurantdata-edit.component.html',
  styleUrls: ['./restaurantdata-edit.component.css']
})
export class RestaurantdataEditComponent {

  isrestLogIn:boolean=false;
  id: number;
  rest: Restaurant;
  selectedImage: File | null = null;
  isChecked: boolean;

  constructor(
    private router: Router,
    private restService: RestaurantService,
    private route: ActivatedRoute,
    private hardCodedAuthantication:HardcodedAuthenticationService
  ) {}

  ngOnInit(): void {

    if(this.hardCodedAuthantication.isAdminLoggedIn()){
      this.isrestLogIn=true;
    }

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.rest = new Restaurant(this.id, '', '', '', 0, '', '', '', '', '',false);

    if (this.id !== -1) {
      this.restService.getrestById(this.id).subscribe(
        response => this.rest = response
      );
    }
  }

  updateRest() {
    
    if(this.hardCodedAuthantication.isAdminLoggedIn()){
    this.restService.updaterestById(this.id, this.rest).subscribe(
      (response: any) => {
        console.log(response);
        alert('Restaurant updated successfully')

        this.router.navigate(['restaurantadmin']);
      },
      (error: any) => {
        console.log(error);
      }
    );
    }
    if(this.hardCodedAuthantication.isRestLoggedIn()){
      this.restService.updaterestById(this.id, this.rest).subscribe(
        (response: any) => {
          console.log(response);
          alert('Restaurant updated successfully')
          this.router.navigate(['item',this.id]);
        });
    }
  }
}
