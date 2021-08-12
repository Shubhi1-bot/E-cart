import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CartserviceService } from '../cartservice.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
   
  
  productList: any = [];

   product = new FormGroup({

     name : new FormControl('', [Validators.required]),
     price :new FormControl('', [Validators.required]),
     description : new FormControl('', [Validators.required]),
     imgPath : new FormControl('', [Validators.required])

  });

  saveProduct(){
    let newPrdt = this.product.value;
    
      this.CartserviceService.setnewProductList(newPrdt)

      this.product.reset()
      console.log(this.productList);
      

  }

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
     private CartserviceService: CartserviceService) { }

  ngOnInit(): void {
  }

}
