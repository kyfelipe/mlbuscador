import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { SearchResponse } from '../../model/search/search-response.model';
import { SearchRequest } from '../../model/search/search-request.model';

@Injectable()
export class SearchService {
  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  public search(request: SearchRequest | any): Observable<SearchResponse> {
    return this.http
      .post<SearchResponse>(this.url + '/buscaproduto', request);
      // .pipe(catchError(this.handleError<any>()));
  }
}
