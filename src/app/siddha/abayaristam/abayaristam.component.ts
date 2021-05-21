import { Component, OnInit } from '@angular/core';
//import { CartService } from 'src/app/services/cart.service';
import { ProductListService } from 'src/app/services/product-list.service';
@Component({
  selector: 'app-abayaristam',
  templateUrl: './abayaristam.component.html',
  styleUrls: ['./abayaristam.component.scss']
})
export class AbayaristamComponent implements OnInit {

  constructor(private pls:ProductListService) { }

  ngOnInit(): void {
  }

  addToCart(product:string) {
    this.pls.addItem(product);
    window.alert('Your product has been added to the cart!');

    console.log(product);
    this.pls.getservices(product);
    }

}
