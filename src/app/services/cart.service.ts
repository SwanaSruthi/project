import { Injectable } from '@angular/core';

@Injectable({
  providedIn : 'root'
})

export class CartService{

  items:string[] = [];

  constructor(){

  }

  addToCart(product:string){
      this.items.push(product);
  }

  getItems(){
    return this.items;
  }

}
