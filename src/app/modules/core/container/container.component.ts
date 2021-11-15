import { Component, OnInit } from '@angular/core';

import { PRODUCTS } from './../../../shared/models/mock-data';
import {IProduct} from "../../../shared/models/product";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  products = PRODUCTS;
  product!: IProduct;
  cart: IProduct[] = [];
  hide = true;
  constructor() { }

  ngOnInit(): void {
  }

  showDetail(value:IProduct) {
    this.product = value;
    this.hide = false;
  }

  closeDetail(value:boolean) {
    this.hide = value;
  }

  addToCart(product:IProduct) {
    this.cart.push(product)
  }

}
