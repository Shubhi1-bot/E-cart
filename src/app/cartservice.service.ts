import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  private localStorage: Storage;
  constructor() { 
  }

private productList = [];
addQuantity ;
 setnewProductList(value){

  

  var product = localStorage.getItem("products");

  if((product==null)===false){
  this.productList = JSON.parse(product); // to  convert into object
  console.log(this.productList);
  }
// if(this.productList != null || typeof this.productList != 'undefined'){

  
//   console.log(this.productList);
 for(let i = 0; i < this.productList.length; i++){
      
   if(this.productList[i].name == value.name){
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
  return this.productList;
}

 private cartList = [];
 
 setNewCart(value){
  let cartproduct = localStorage.getItem("cartproducts");

  if((cartproduct==null)===false){
  this.cartList = JSON.parse(cartproduct); // to  convert into object
  console.log(this.cartList);
   }
  if(this.cartList.length > 0){
    for(let i = 0; i < this.cartList.length; i++) {
      if(this.cartList[i].name == value.name){
        this.cartList[i].quantity += value.quantity;
        var modiProd = JSON.stringify(this.cartList);
        localStorage.setItem("cartproducts", modiProd);
        return
       }
      
          else{
            
            this.cartList.push(value);
            var modiProd = JSON.stringify(this.cartList);
              localStorage.setItem("cartproducts", modiProd);
              console.log(this.cartList, "heyy");
              return
          }
        }
        
      }
  
  else{
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
}
