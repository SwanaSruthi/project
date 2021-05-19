import { Component, OnInit } from '@angular/core';
//import { ProductListService } from 'src/app/services/product-list.service';
//import { CartService } from 'src/app/services/cart.service';
//private pls:ProductListService,private c:CartService
@Component({
  selector: 'app-ashokarishta',
  templateUrl: './ashokarishta.component.html',
  styleUrls: ['./ashokarishta.component.scss']
})
export class AshokarishtaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /*
  addToCart(product:string) {
    this.pls.addItem(product);
    window.alert('Your product has been added to the cart!');
    console.log(product);
    this.pls.getservices(product);
  }
  */
}
