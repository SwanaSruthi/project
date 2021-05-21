import { Component, OnInit } from '@angular/core';
//import { ProductListService } from 'src/app/services/product-list.service';
//import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
/*
  data:Map<string,object>| undefined
  list:string[] = [];

  constructor(private service: ProductListService, private http: HttpClient) {
    this.list = service.returnId();
    console.log(this.list);
  }
  */
  constructor() {}
  ngOnInit(): void {
  }
  placeOrder(){
    window.alert("ORDER PLACED SUCCESSFULLY");
  }

}
