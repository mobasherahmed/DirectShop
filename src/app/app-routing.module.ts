import { MobilesComponent } from './pages/mobiles/mobiles.component';
import { LcdsComponent } from './pages/lcds/lcds.component';
import { LaptopsComponent } from './pages/laptops/laptops.component';
import { HeadphonesComponent } from './pages/headphones/headphones.component';
import { CartComponent } from './pages/cart/cart.component';
import { UserGuard } from './auth/user.guard';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MinimalLayoutComponent } from './layouts/minimal-layout/minimal-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShippingComponent } from './pages/shipping/shipping.component';


const routes: Routes = [
  {
    path : "",
    component: MainLayoutComponent,
    children : [
      {
        path : "",
        component : HomeComponent 
      },
      {
        path : "about",
        component : AboutComponent 
      },
      {
        path : "products",
        component : ProductListComponent
      },
      {
        path : "profile",
        component : ProfileComponent,
        canActivate :[UserGuard]
      },
      {
        path : "product/:id",
        component : ProductComponent
      },
      {
        path : "cart",
        component : CartComponent,
        
      },
      {
        path : "shipping",
        component : ShippingComponent
      },
      {
        path : "HeadPhones",
        component : HeadphonesComponent
      },
      {
        path : "Laptops",
        component : LaptopsComponent
      },
      {
        path : "LCD",
        component : LcdsComponent
      },
      {
        path : "Mobiles",
        component : MobilesComponent
      },
    ]
  },
  { 
    path:"users",
    component: MinimalLayoutComponent,
    children : [
      {
        path:"",
        redirectTo : "login",
        pathMatch:"full"
      },
      {
        path : "login",
        component : LoginComponent
      }
    ]
  },
  {
    path:"**",
    component : NotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
