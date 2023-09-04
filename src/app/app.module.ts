import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/homePage/login/login.component';
import { LogoutComponent } from './component/homePage/logout/logout.component';
import { MenuComponent } from './component/homePage/menu/menu.component';
import { FooterComponent } from './component/homePage/footer/footer.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './component/homePage/register/register.component';
import { MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';
import { PaymentComponent } from './component/customerPage/payment/payment.component';
import { RestaurantsComponent } from './component/restaurantPage/restaurants/restaurants.component';
import { ItemComponent } from './component/restaurantPage/item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistereditemComponent } from './component/restaurantPage/registereditem/registereditem.component';
import { MatIconModule} from '@angular/material/icon';
import { RestaurantSignupComponent } from './component/restaurantPage/restaurant-signup/restaurant-signup.component';
import { RestaurantRegistrationComponent } from './component/restaurantPage/restaurant-registration/restaurant-registration.component';
import { UpdateItemComponent} from './component/restaurantPage/update-item/update-item.component';
import { CustomerDataComponent } from './component/adminPage/customer-data/customer-data.component';
import { CustomerDataEditComponent } from './component/customerPage/customer-data-edit/customer-data-edit.component';
import { RestaurantDataComponent } from './component/adminPage/restaurant-data/restaurant-data.component';
import { RestaurantdataEditComponent } from './component/restaurantPage/restaurantdata-edit/restaurantdata-edit.component';
import { HomeComponent } from './component/homePage/home/home.component';
import { HelpComponent } from './component/homePage/help/help.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxPaginationModule } from 'ngx-pagination';
import { ErrorComponent } from './component/homePage/error/error.component';
import { CartComponent } from './component/customerPage/cart/cart.component';
import { CustomerAddComponent } from './component/adminPage/customer-add/customer-add.component';
import { PaymentSuccessComponent } from './component/customerPage/payment-success/payment-success.component';
import { PreviousOrderrestaurantComponent } from './component/restaurantPage/previous-orderrestaurant/previous-orderrestaurant.component';
import { PreviousOrderCustomerComponent } from './component/customerPage/previous-order-customer/previous-order-customer.component';
import { QuantityComponent } from './component/customerPage/quantity/quantity.component';
import { ContactUsComponent } from './component/homePage/contact-us/contact-us.component';
import { MatRadioModule } from '@angular/material/radio'
import { MatSelectModule } from '@angular/material/select'

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
    ContactUsComponent
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
    NgxPaginationModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
