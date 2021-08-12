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

  constructor(private route: ActivatedRoute,
     private CartserviceService: CartserviceService) { }

  

  ngOnInit(): void { 
    this.productlist = this.CartserviceService.getProductList()
    console.log(this.productlist);
  }
  addToCart(product:any){
    
    let newproduct = product;

    this.CartserviceService.setNewCart(newproduct)

      console.log("Productlist Page", newproduct);
  }

}
