import { Component, OnInit } from '@angular/core';
//import { CartService } from 'src/app/services/cart.service';
//import { ProductListService } from 'src/app/services/product-list.service';private pls:ProductListService,
@Component({
  selector: 'app-abayaristam',
  templateUrl: './abayaristam.component.html',
  styleUrls: ['./abayaristam.component.scss']
})
export class AbayaristamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /*
  addToCart(product:string) {
    this.pls.addItem(product);
    window.alert('Your product has been added to the cart!');

    console.log(product);

    //this.c.onDisplay();
    //console.log("calling");
   // console.log(JSON.stringify(this.pls.getservices(product)));

  this.pls.getservices(product);
    }
    */
}
