import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/homePage/login/login.component';
import { RegisterComponent } from './component/homePage/register/register.component';
import { ItemComponent } from './component/restaurantPage/item/item.component';
import { RestaurantsComponent } from './component/restaurantPage/restaurants/restaurants.component';
import { RestaurantSignupComponent } from './component/restaurantPage/restaurant-signup/restaurant-signup.component';
import { RestaurantRegistrationComponent } from './component/restaurantPage/restaurant-registration/restaurant-registration.component';
import { CustomerDataComponent } from './component/adminPage/customer-data/customer-data.component';
import { CustomerDataEditComponent } from './component/customerPage/customer-data-edit/customer-data-edit.component';
import { RegistereditemComponent } from './component/restaurantPage/registereditem/registereditem.component';
import { UpdateItemComponent } from './component/restaurantPage/update-item/update-item.component';

import { RestaurantDataComponent } from './component/adminPage/restaurant-data/restaurant-data.component';
import { RestaurantdataEditComponent } from './component/restaurantPage/restaurantdata-edit/restaurantdata-edit.component';
import { MenuComponent } from './component/homePage/menu/menu.component';
import { HomeComponent } from './component/homePage/home/home.component';
import { ErrorComponent } from './component/homePage/error/error.component';
import { RouteGuardService } from './service/route-guard.service';
import { HelpComponent } from './component/homePage/help/help.component';
import { CartComponent } from './component/customerPage/cart/cart.component';
import { CustomerAddComponent } from './component/adminPage/customer-add/customer-add.component';
import { ContactUsComponent } from './component/homePage/contact-us/contact-us.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
   {path:'logoutadmin',component:MenuComponent,canActivate:[RouteGuardService]},
  {path:'login',component:LoginComponent,canActivate:[RouteGuardService]},
  {path:'register',component:RegisterComponent,canActivate:[RouteGuardService]},
  {path:'RestaurantSignup',component:RestaurantSignupComponent},
  {path:'restaurant',component:RestaurantsComponent},
  {path:'item/:id',component:ItemComponent},
  {path: 'RegisterRestaurant', component:RestaurantRegistrationComponent},
  {path:'logout',component:HomeComponent,canActivate:[RouteGuardService]},
  {path:'customeradmin',component:CustomerDataComponent,canActivate:[RouteGuardService]},
  {path:'customerEdit/:id',component:CustomerDataEditComponent,canActivate:[RouteGuardService]},
  {path:'registerItem/:id',component:RegistereditemComponent,canActivate:[RouteGuardService]},
  {path:'updateItem/:id/:rid',component:UpdateItemComponent,canActivate:[RouteGuardService]},
  {path:'restaurantEdit/:id',component:RestaurantdataEditComponent,canActivate:[RouteGuardService]},
  {path: 'restaurantadmin',component:RestaurantDataComponent,canActivate:[RouteGuardService]},
  {path:'customeradmin',component:CustomerDataComponent,canActivate:[RouteGuardService]},
  {path:'help',component:HelpComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'cart',component:CartComponent,canActivate:[RouteGuardService]},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
