import { Component, OnInit } from '@angular/core';

import { IProduct } from './../../../shared/models/product';
import { PRODUCTS } from './../../../shared/models/mock-data';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  products: IProduct[] = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

}
