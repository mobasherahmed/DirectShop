import {  ReactiveFormsModule  , FormsModule } from '@angular/forms';
import { CartService } from './services/cart.service';
import { FooterComponent } from './partials/footer/footer.component';
import { UsersService } from './services/users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MinimalLayoutComponent } from './layouts/minimal-layout/minimal-layout.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { HeaderComponent } from './partials/header/header.component';
import { ProductComponent } from './pages/product/product.component';
import { SliderComponent } from './partials/slider/slider.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoriesListComponent } from './pages/categories-list/categories-list.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CartComponent } from './pages/cart/cart.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { HeadphonesComponent } from './pages/headphones/headphones.component';
import { HeadphonesListComponent } from './pages/headphones-list/headphones-list.component';
import { HeadphonesSliderComponent } from './partials/headphones-slider/headphones-slider.component';
import { LaptopsComponent } from './pages/laptops/laptops.component';
import { LaptopsListComponent } from './pages/laptops-list/laptops-list.component';
import { LaptopsSliderComponent } from './partials/laptops-slider/laptops-slider.component';
import { LcdsComponent } from './pages/lcds/lcds.component';
import { LcdsListComponent } from './pages/lcds-list/lcds-list.component';
import { LcdsSliderComponent } from './partials/lcds-slider/lcds-slider.component';
import { MobilesComponent } from './pages/mobiles/mobiles.component';
import { MobilesListComponent } from './pages/mobiles-list/mobiles-list.component';
import { MobilesSliderComponent } from './partials/mobiles-slider/mobiles-slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MinimalLayoutComponent,
    AboutComponent,
    HomeComponent,
    ProductListComponent,
    HeaderComponent,
    ProductComponent,
    SliderComponent,
    NotFoundComponent,
    LoginComponent,
    ProfileComponent,
    CategoriesListComponent,
    FooterComponent,
    CartComponent,
    ShippingComponent,
    HeadphonesComponent,
    HeadphonesListComponent,
    HeadphonesSliderComponent,
    LaptopsComponent,
    LaptopsListComponent,
    LaptopsSliderComponent,
    LcdsComponent,
    LcdsListComponent,
    LcdsSliderComponent,
    MobilesComponent,
    MobilesListComponent,
    MobilesSliderComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CKEditorModule,
    ReactiveFormsModule ,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    UsersService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
