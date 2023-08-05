import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './component/register/register.component';
import { MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';
import { PaymentComponent } from './component/payment/payment.component';
import { RestaurantsComponent } from './component/restaurants/restaurants.component';
import { ItemComponent } from './component/item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistereditemComponent } from './component/registereditem/registereditem.component';
import { MatIconModule} from '@angular/material/icon';
import { RestaurantSignupComponent } from './component/restaurant-signup/restaurant-signup.component';
import { RestaurantRegistrationComponent } from './component/restaurant-registration/restaurant-registration.component';
import { UpdateItemComponent} from './component/update-item/update-item.component';
import { CustomerDataComponent } from './component/customer-data/customer-data.component';
import { CustomerDataEditComponent } from './component/customer-data-edit/customer-data-edit.component';
import { AdminComponent } from './class/admin/admin.component';
import { RestaurantDataComponent } from './component/restaurant-data/restaurant-data.component';
import { RestaurantdataEditComponent } from './component/restaurantdata-edit/restaurantdata-edit.component';
import { HomeComponent } from './component/home/home.component';
import { HelpComponent } from './component/help/help.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxPaginationModule } from 'ngx-pagination';
import { ErrorComponent } from './component/error/error.component';
import { CartComponent } from './component/cart/cart.component';
import { CustomerAddComponent } from './component/customer-add/customer-add.component';
import { PaymentSuccessComponent } from './component/payment-success/payment-success.component';
import { PreviousOrderrestaurantComponent } from './component/previous-orderrestaurant/previous-orderrestaurant.component';
import { PreviousOrderCustomerComponent } from './component/previous-order-customer/previous-order-customer.component';
import { QuantityComponent } from './component/quantity/quantity.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    FooterComponent,
    RegisterComponent,
    PaymentComponent,
    RestaurantsComponent,
    ItemComponent,
    RegistereditemComponent,
    RestaurantSignupComponent,
    RestaurantRegistrationComponent,
    UpdateItemComponent,
    CustomerDataComponent,
    CustomerDataEditComponent,
    AdminComponent,
    RestaurantDataComponent,
    RestaurantdataEditComponent,
    HomeComponent,
    HelpComponent,
    ErrorComponent,
    CartComponent,
    CustomerAddComponent,
    PaymentSuccessComponent,
    PreviousOrderrestaurantComponent,
    PreviousOrderCustomerComponent,
    QuantityComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
