import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';
@Component({
  selector: 'app-kuppaimeni',
  templateUrl: './kuppaimeni.component.html',
  styleUrls: ['./kuppaimeni.component.scss']
})
export class KuppaimeniComponent implements OnInit {

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


