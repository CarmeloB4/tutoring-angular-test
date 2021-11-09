import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../../../../shared/models/product";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
@Input() products: IProduct[] = [];
@Output() productDetail = new EventEmitter<IProduct>()
  constructor() { }

  ngOnInit(): void {
  }

}
