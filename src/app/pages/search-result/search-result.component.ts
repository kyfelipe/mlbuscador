import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchResponse } from '../../shared/model/search/search-response.model';

@Component({
  selector: 'mlb-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  public search: SearchResponse;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.search = this.route.snapshot.data.search;
    console.log(this.search);
  }
}
