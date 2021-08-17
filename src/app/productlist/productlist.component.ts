import {  Input } from '@angular/core';  
import { Lists } from './lists.model';

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CartserviceService } from '../cartservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

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
      
      if(this.productlist[i].name == product.name){
        this.productlist[i].quantity = this.productlist[i].quantity - this.addQuantity;
        var modiProd = JSON.stringify(this.productlist)
        localStorage.setItem("products", modiProd)
        
        let cart = {
          "name" : newproduct.name,
           "price" : newproduct.price,
           "quantity" : this.addQuantity,
           
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
   addQuantity = 1;
   
  increaseProduct(i){
    let nums = this.productlist[i].quantity;
   if(this.addQuantity < nums){
     this.addQuantity++; 
    }
  }
  
  decreaseProduct(i){
    if(this.addQuantity != 1){
     this.addQuantity--; 
    }
}
 }
// <input class="form-control" 
// type="number" min="0" id="path_latsArray_{{i}}"
//  name="path_latsArray_{{i}}" 
// value="{{coords[0]}}" (change)="updateLatLngsArray('path',i,drawLineCoordArray)">