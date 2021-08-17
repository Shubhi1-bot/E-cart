import { Component, OnInit } from '@angular/core';

import { CartserviceService } from '../cartservice.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LocalstorageService } from '../localstorage.service';
import { ProductlistComponent } from '../productlist/productlist.component';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  cartlist : any; 
   
  public setCart(){
    this.localStoragService.setItem('form-data', JSON.stringify(this.cartlist) )
  
    }

    public getProduct(){
      let cartValue = JSON.parse(localStorage.getItem('cart-data'))
      }
    
  constructor(private route: ActivatedRoute,private CartserviceService: CartserviceService,
    private localStoragService: LocalstorageService)
    { }

  ngOnInit(): void {
  this.cartlist = this.CartserviceService.getCartList()
  console.log(this.cartlist, " cart Page");

  let cartproduct = localStorage.getItem("cartproducts");
  if((cartproduct==null)===false){
    this.cartlist = JSON.parse(cartproduct); // to  convert into object
    console.log(this.cartlist);
    }
}
removeFrom(i){
  console.log(i)
   this.cartlist.splice(i, 1);
   var modiProd = JSON.stringify(this.cartlist)
   localStorage.setItem("cartproducts", modiProd)
 }
get cartTotal(){
   let count = 0;
   for(let i = 0; i < this.cartlist.length; i++){
    count++;
    if(this.cartlist[i].quantity > this.cartlist.quantity){
      count = count + this.cartlist.quantity;

    }
   }
   return count;
 }
 newQuantity;
 increment(i){
   let list = this.CartserviceService.getProductList();
   if( list[i].quantity > 1) {
    this.CartserviceService.decProdQaun(i);
    this.cartlist[i].quantity++;

    
   }
  //  this.CartserviceService.productList[i].quantity--;
  
  var modiProd = JSON.stringify(this.cartlist)
  localStorage.setItem("cartproducts", modiProd)
   
 }
 decrement(i){
   if(this.cartlist[i].quantity > 1)
   {
  this.CartserviceService.setProductQuantity(i);
   this.cartlist[i].quantity--;
  }

  var modiProd = JSON.stringify(this.cartlist)
   localStorage.setItem("cartproducts", modiProd)
}
}
