import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataViewRestaurantService } from 'src/app/service/data-view-restaurant.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-restaurant-registration',
  templateUrl: './restaurant-registration.component.html',
  styleUrls: ['./restaurant-registration.component.css']
})
export class RestaurantRegistrationComponent implements OnInit {

  public loading = false;
  public countries: any[] = [];
  public states: any[] = [];
  public cities: any[] = [];
  countryId: any;
  countryName: string;
  stateId: any;
  stateName: string;
  cityId: any;

  constructor(
    private data: DataViewRestaurantService,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
  ) {  }

 
  private getCountries() {
    this.loading = true;
    this.dataService.getCountries().subscribe(
      (response) => {
        this.countries = response.data;
        this.loading = false;
      },
      (error) => {
        console.log('Something went wrong: ', error);
      }
    );
  }

  
  public getCountryId(){
    for(let i=0;i<this.countries.length;i++){
      if(this.countries[i].name == this.countryName){
          this.countryId = this.countries[i].id;
          break;
      }
    }
  }

  public getStateId(){
    for(let i=0;i<this.states.length;i++){
      if(this.states[i].name == this.stateName){
          this.stateId = this.states[i].id;
          break;
      }
    }
  }


  /**
   * Selects country, and gets the states for it
   * @param country
   * @returns void
   */
  public selectCountry(country: any) {
    if (!country) {
      this.registrationForm.controls['state'].setValue('');
      this.registrationForm.controls['city'].setValue('');
      this.states = [];
      this.cities = [];
      return;
    }
    this.loading = true;
    this.countryName = country;
    this.getCountryId();
    this.dataService.getStates(this.countryId).subscribe(
      (response) => {
        this.states = response.data;
        this.loading = false;
      },
      (error) => {
        console.log('Something went wrong: ', error);
      }
    );
  }
  /**
   * Selects the state and gets cities for it
   * @param state
   * @returns void
   */
  public selectState(state: any) {
    if (!state) {
      this.registrationForm.controls['city'].setValue('');
      this.cities = [];
      return;
    }
    this.loading = true;
    this.stateName = state;

    this.getStateId();
  
    this.dataService.getCities(this.stateId).subscribe(
      (response) => {
        this.cities = response.data;
        this.loading = false;
      },
      (error) => {
        console.log('Something went wrong: ', error);
      }
    );
  }



  registrationForm = new FormGroup({
    restname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+$')]),
    area: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z][a-zA-Z ]+$')]),
    country: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    pincode: new FormControl('', [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')]),
    managerName: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z][a-zA-Z ]+$')]),
    contactNumber: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('^[6-9][0-9]{9}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]),
    pic: new FormControl('', [Validators.required]),
  })


  ngOnInit(): void {
    this.getCountries();
  }


  addRestaurant(): void {
    console.log(this.countryName);
    const restaurant = {
      restname: this.registrationForm.value.restname,
      area: this.registrationForm.value.area,
      city: this.registrationForm.value.city,
      state: this.registrationForm.value.state,
      country: this.registrationForm.value.country,
      pincode: this.registrationForm.value.pincode,
      managerName: this.registrationForm.value.managerName,
      contactNumber: this.registrationForm.value.contactNumber,
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
      pic: this.registrationForm.value.pic
    };

    this.data.addRestaurant(restaurant).subscribe(
      (response: any) => {
        console.log(response);
        alert("Registration Successful!");
        this.router.navigate(['RestaurantSignup']);
      },
      (error: any) => {
        alert("Registration failed!!Please Try Again Later.")
        console.log(error);
      }
    );
  }

  get restname() {
    return this.registrationForm.get('restname');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get area() {
    return this.registrationForm.get('area');
  }

  get city() {
    return this.registrationForm.get('city');
  }

  get state() {
    return this.registrationForm.get('state');
  }

  get country() {
    return this.registrationForm.get('country');
  }

  get pincode() {
    return this.registrationForm.get('pincode');
  }

  get contactNumber() {
    return this.registrationForm.get('contactNumber');
  }

  get managerName() {
    return this.registrationForm.get('managerName');
  }

  get password() {
    return this.registrationForm.get('password');
  }

}