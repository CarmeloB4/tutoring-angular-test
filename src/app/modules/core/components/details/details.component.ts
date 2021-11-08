import { Component, Input, OnInit } from '@angular/core';

import { IProduct } from './../../../../shared/models/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() product!: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
