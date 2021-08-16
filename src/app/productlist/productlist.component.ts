import {  Input } from '@angular/core';  
import { Lists } from './lists.model';

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CartserviceService } from '../cartservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
 })
 export class ProductlistComponent implements OnInit {

 productlist : any;
 
 addQuantityNum ;
  constructor(private route: ActivatedRoute,
     private CartserviceService: CartserviceService) { }

  addQuantity(i){
    this.addQuantityNum[i] = this.addQuantityNum;
  }

  ngOnInit(): void { 
    var product = localStorage.getItem("products");
    if((product==null)===false){
      this.productlist = JSON.parse(product); // to  convert into object
      console.log(this.productlist);
      }
  }
   
   
  addToCart(product:any){
    
    let newproduct = product;

    
    let msg = "your product has been added to the cart";
    alert(msg);
    for(let i = 0; i < this.productlist.length; i++){
      
      if(this.productlist[i].name == product.name){
        this.productlist[i].quantity = this.productlist[i].quantity - 1;
        var modiProd = JSON.stringify(this.productlist)
        localStorage.setItem("products", modiProd)
        let cart = {
          "name" : newproduct.name,
           "price" : newproduct.price,
           "quantity" : 1
        }
        this.CartserviceService.setNewCart(cart)
        return
      }
     }
    
  
      
  }
  
  
  deleteProduct(i){
    
      console.log(i)
       this.productlist.splice(i, 1);
       var modiProd = JSON.stringify(this.productlist)
     localStorage.setItem("products", modiProd)
     
  }
  
}
