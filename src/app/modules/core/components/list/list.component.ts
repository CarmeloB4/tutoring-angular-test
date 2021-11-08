import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../../../shared/models/product";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
@Input() products: IProduct[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
