import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  constructor() { }

private productList = [];

 setnewProductList(value){
   this.productList.push(value);
  console.log(this.productList, "hello");
}
getProductList(){
  return this.productList;
}

 private cartList = [];
 
 setNewCart(value){
   this.cartList.push(value);
   console.log(this.cartList, "bye");
 }
 getCartList(){
   return this.cartList;
 }
}
