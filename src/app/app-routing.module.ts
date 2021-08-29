import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HeaderComponent } from './header/header.component';

import { AddproductComponent } from './addproduct/addproduct.component';

import { CommonlistComponent } from './commonlist/commonlist.component';

const routes: Routes = [
  { path: 'header-component', component: HeaderComponent },
  { path: 'productlist-component', component: CommonlistComponent },
  { path: 'addproduct-component', component: AddproductComponent },
  { path: 'cart-component', component: CommonlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
