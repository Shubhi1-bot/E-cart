import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartserviceService } from '../cartservice.service';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-commonlist',
  templateUrl: './commonlist.component.html',
  styleUrls: ['./commonlist.component.css']
})
export class CommonlistComponent implements OnInit {

  displayPage: string;

  displayList: Array<any>;
  productlist: any;
  title: string;
  cartlist: any;
  total = 0;
  add = 1;
  public setCart() {
    this.localStoragService.setItem('form-data', JSON.stringify(this.cartlist))

  }

  public getProduct() {
    let cartValue = JSON.parse(localStorage.getItem('cart-data'))
  }

  constructor(private route: ActivatedRoute, private router: Router,
    private CartserviceService: CartserviceService, private localStoragService: LocalstorageService) { }



  ngOnInit(): void {

    if (this.router.url.includes('productlist')) {
      this.displayPage = 'productList'
      console.log("CurrentRoute", this.router.url);
    }

    this.title = (this.displayPage === 'productList') ? 'Product List' : 'Cart';


    let product = localStorage.getItem("products");
    if ((product == null) === false) {
      this.productlist = JSON.parse(product); // to  convert into object
      console.log(this.productlist);
    }
    this.cartlist = this.CartserviceService.getCartList()
    console.log("cartlist", this.cartlist);
    let cartproduct = localStorage.getItem("cartproducts");
    if ((cartproduct == null) === false) {
      this.cartlist = JSON.parse(cartproduct); // to  convert into object
      for (let i = 0; i < this.cartlist.length; i++) {
        let productAmt = this.cartlist[i].quantity * this.cartlist[i].price;

        this.total += productAmt;
      }



    }
    if (this.displayPage) {
      this.displayList = this.productlist;
    } else {
      this.displayList = this.cartlist;
    }
    console.log("Random", this.productlist, this.displayPage, this.displayList);
  }


  addToCart(product: any) {

    let newproduct = product;


    let msg = "your product has been added to the cart";
    alert(msg);
    for (let i = 0; i < this.productlist.length; i++) {

      if (this.productlist[i].productId == product.productId) {
        this.productlist[i].quantity = this.productlist[i].quantity - this.productlist[i].add;
        var modiProd = JSON.stringify(this.productlist)
        localStorage.setItem("products", modiProd)

        let cart = {
          "name": newproduct.name,
          "productId": newproduct.productId,
          "price": newproduct.price,
          "imgPath": newproduct.imgPath,
          "quantity": newproduct.add

        }
        this.CartserviceService.setNewCart(cart)

        return
      }
    }



  }


  deleteProduct(i) {

    console.log(i)
    this.productlist.splice(i, 1);
    var modiProd = JSON.stringify(this.productlist)
    localStorage.setItem("products", modiProd)

  }


  increaseProduct(i) {
    let nums = this.productlist[i].quantity;
    if (this.productlist[i].add < nums) {
      this.productlist[i].add++;

    }
  }

  decreaseProduct(i) {
    if (this.productlist[i].add != 1) {
      this.productlist[i].add--;
    }
  }


  increment(i) {
    let list = this.CartserviceService.getProductList();
    if (list[i].quantity > 1) {
      this.CartserviceService.decProdQaun(this.cartlist[i]);
      this.cartlist[i].quantity++;


    }
    //  this.CartserviceService.productList[i].quantity--;

    var modiProd = JSON.stringify(this.cartlist)
    localStorage.setItem("cartproducts", modiProd)

  }
  decrement(i) {
    if (this.cartlist[i].quantity > 1) {
      this.CartserviceService.setProductQuantity(this.cartlist[i]);
      this.cartlist[i].quantity--;
      this.total -= this.cartlist[i].price;
    }

    var modiProd = JSON.stringify(this.cartlist)
    localStorage.setItem("cartproducts", modiProd)
  }
  removeFrom(i) {

    console.log(i)


    this.CartserviceService.addToProdList(this.cartlist[i]);
    this.cartlist.splice(i, 1);

    //  let list = this.CartserviceService.getProductList();
    //  list[i] = list[i] + this.cartlist[i].quantity;

    var modiProd = JSON.stringify(this.cartlist)
    localStorage.setItem("cartproducts", modiProd)

  }
  cartTotl() {
    let total2 = 0;
    for (let i = 0; i < this.cartlist.length; i++) {
      let total1 = this.cartlist[i].product.quantity * this.cartlist[i].product.price;

      total2 += total1;
    }
    return total2;

    console.log(total2);

  }

  conditionalInc(i) {
    if (this.displayPage) {
      this.increaseProduct(i)
    } else { this.increment(i) }

  }
  conditionalDec(i) {
    if (this.displayPage) {
      this.decreaseProduct(i)
    } else { this.decrement(i) }

  }
  conditionalDlt(i) {
    if (this.displayPage) {
      this.deleteProduct(i)
    } else { this.removeFrom(i) }

  }
}



