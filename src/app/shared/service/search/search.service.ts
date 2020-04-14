import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { SearchResponse } from '../../model/search-response.model';

@Injectable()
export class SearchService {
  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  public search(cep: string, termoBusca: string): Observable<SearchResponse> {
    return this.http
      .post<SearchResponse>(this.url + '/buscaproduto', {cep, termoBusca});
      // .pipe(catchError(this.handleError<any>()));
  }
}
