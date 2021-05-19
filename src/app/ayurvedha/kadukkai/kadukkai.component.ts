import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kadukkai',
  templateUrl: './kadukkai.component.html',
  styleUrls: ['./kadukkai.component.scss']
})
export class KadukkaiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
/*import { CartService } from 'src/app/services/cart.service';
import { ProductListService } from 'src/app/services/product-list.service';
private pls:ProductListService,private c:CartService
addToCart(product:string) {
  this.pls.addItem(product);
  window.alert('Your product has been added to the cart!');
  console.log(product);
  this.pls.getservices(product);
} */
