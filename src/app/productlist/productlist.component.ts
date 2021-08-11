import {  Input } from '@angular/core';  
import { Lists } from './lists.model';

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  
cart : string[] = [];

// Product = new FormGroup({
//   name : product.name
// })

//  productlist : Lists[] = [
//    new Lists('Book', 'Written by indians', 50,
//     'https://www.india.com/wp-content/uploads/2020/09/bhagavad-gita_resize_5.jpg')
//  ];

@Input() productList: any[];
  constructor(private route: ActivatedRoute) { }

  // addToCart()
  // {
  //   let addedProduct = this.Product;
  //   this.cart.push(addedProduct)
  // }

  ngOnInit(): void {this.route.queryParams.subscribe(params => {
    // this.name = params['name'];
  });
  }

}
