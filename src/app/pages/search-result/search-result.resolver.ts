import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SearchResponse } from '../../shared/model/search/search-response.model';
import { SearchService } from '../../shared/service/search/search.service';

@Injectable()
export class SearchResultResolver implements Resolve<Observable<SearchResponse>> {
  constructor(private searchService: SearchService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SearchResponse | any> {
    const query = route.queryParams;
    console.log(query);
    return this.searchService.search(query);
  }
}
