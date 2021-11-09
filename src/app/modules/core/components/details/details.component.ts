import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { IProduct } from './../../../../shared/models/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() product!: IProduct;
  @Output() closeDetail = new EventEmitter<boolean>()

  constructor() {}

  ngOnInit(): void {
  }
}
