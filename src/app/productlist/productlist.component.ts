import {  Input } from '@angular/core';  
import { Lists } from './lists.model';

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CartserviceService } from '../cartservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
 })
 export class ProductlistComponent implements OnInit {

 productlist : any;
  
  
  constructor(private route: ActivatedRoute,
     private CartserviceService: CartserviceService) { }

  

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
      
      if(this.productlist[i].productId == product.productId){
        this.productlist[i].quantity = this.productlist[i].quantity - this.productlist[i].add;
        var modiProd = JSON.stringify(this.productlist)
        localStorage.setItem("products", modiProd)
        
        let cart = {
          "name" : newproduct.name,
          "productId" : newproduct.productId,
           "price" : newproduct.price,
           "quantity" : newproduct.add
           
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
   
   
  increaseProduct(i){
    let nums = this.productlist[i].quantity;
   if(this.productlist[i].add < nums){
    this.productlist[i].add++; 
    
    }
  }
  
  decreaseProduct(i){
    if(this.productlist[i].add != 1){
      this.productlist[i].add--; 
    }
}
 }
