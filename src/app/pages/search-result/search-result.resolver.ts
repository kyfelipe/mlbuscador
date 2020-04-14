import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SearchResponse } from '../../shared/model/search-response.model';
import { SearchService } from '../../shared/service/search/search.service';

@Injectable()
export class SearchResultResolver implements Resolve<Observable<SearchResponse>> {
  constructor(private searchService: SearchService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SearchResponse | any> {
    // const cpf = route.params.cpf;
    return this.searchService.search('24456-422', 'ps4');
  }
}
