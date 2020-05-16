import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../shared/model/product/product.model';

@Component({
  selector: 'mlb-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit(): void { }
}
