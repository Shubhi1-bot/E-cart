import { Component, OnInit } from '@angular/core';

import { CartserviceService } from '../cartservice.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  cartlist : any;

  constructor(private route: ActivatedRoute,private CartserviceService: CartserviceService)
    { }

  ngOnInit(): void {
  this.cartlist = this.CartserviceService.getCartList()
  console.log(this.cartlist, " cart Page");

}
}
