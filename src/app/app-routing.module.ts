import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HeaderComponent } from './header/header.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'header-component', component: HeaderComponent },
  { path: 'productlist-component', component: ProductlistComponent },
  { path: 'addproduct-component', component: AddproductComponent },
  { path: 'cart-component', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
