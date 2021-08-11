import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
   
  isEnabled ;
  productList: string[] = [];

   product = new FormGroup({
     name : new FormControl,
     price :new FormControl ,
     description : new FormControl,
     imgPath : new FormControl

  });

  saveProduct(){
    let newPrdt = this.product.value;
    if(this.product.value == '' )
    {this.isEnabled = true; }
    else{
      this.productList.push(newPrdt)
      this.product.reset()
      console.log(this.productList);
      
    }
  }

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
