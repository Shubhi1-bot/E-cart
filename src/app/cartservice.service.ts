import { Injectable } from '@angular/core';
import {v4 as uuidv4} from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  private localStorage: Storage;
  constructor() { 
  }
  serialId = uuidv4(); 
 productList = [];
 quantity : any;
 setnewProductList(value){

  

  var product = localStorage.getItem("products");

  if((product==null)===false){
  this.productList = JSON.parse(product); // to  convert into object
  console.log(this.productList);
  }

 for(let i = 0; i < this.productList.length; i++){
      
   if(this.productList[i].productId == value.productId){
     this.productList[i].quantity+= value.quantity;
     var modiProd = JSON.stringify(this.productList)
     localStorage.setItem("products", modiProd)
     return
   }
  }
//  }


   this.productList.push(value);
   var modiProd = JSON.stringify(this.productList);
     localStorage.setItem("products", modiProd);
     console.log(this.productList, "hello");
     return
  
 
}
getProductList(){

  var product = localStorage.getItem("products");

    if((product==null)===false){
    this.productList = JSON.parse(product); // to  convert into object
    console.log(this.productList);
    }
  return this.productList;
}

  cartList = [];
 
 setNewCart(value){
  let cartproduct = localStorage.getItem("cartproducts");

  if((cartproduct==null)===false){
  this.cartList = JSON.parse(cartproduct); // to  convert into object
  console.log(this.cartList);
  
   }
  
  if(this.cartList.length > 0){
    console.log("1");
    for(let i = 0; i < this.cartList.length; i++) {
      if(this.cartList[i].productId == value.productId){
        console.log("2");
        this.cartList[i].quantity += value.quantity;
        var modiProd = JSON.stringify(this.cartList);
        localStorage.setItem("cartproducts", modiProd);
        return
       }
      
         
        }
        
          console.log("3");
          this.cartList.push(value);
          
          var modiProd = JSON.stringify(this.cartList);
            localStorage.setItem("cartproducts", modiProd);
            console.log(this.cartList, "heyy");
            return
        
      }
  
  else{
    console.log("4");
    this.cartList.push(value);
   var modiProd = JSON.stringify(this.cartList);
     localStorage.setItem("cartproducts", modiProd);
     console.log(this.cartList, "heyy");
     return
  }

 
}

 getCartList(){

   return this.cartList;
 }
 
 setProductQuantity(i){
  var product = localStorage.getItem("products");

  if((product==null)===false){
  this.productList = JSON.parse(product); // to  convert into object
  console.log(this.productList);
  }

   console.log(this.productList);
   this.productList[i].quantity++;

   var modiProd = JSON.stringify(this.productList)
     localStorage.setItem("products", modiProd)
   
 }
 decProdQaun(i){
  var product = localStorage.getItem("products");

  if((product==null)===false){
  this.productList = JSON.parse(product); // to  convert into object
  console.log(this.productList);
  }

  console.log(this.productList);
  this.productList[i].quantity--;

  var modiProd = JSON.stringify(this.productList)
   localStorage.setItem("products", modiProd)
}
  
}
