import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PRODUCTS} from "../../../../shared/models/mock-data";
import {IProduct} from "../../../../shared/models/product";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() products: IProduct[] = [];
@Output() showDetail = new EventEmitter<IProduct>();
  constructor() { }

  ngOnInit(): void {
  }

}
