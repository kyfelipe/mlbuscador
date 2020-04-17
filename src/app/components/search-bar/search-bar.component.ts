import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchRequest } from '../../shared/model/search/search-request.model';

@Component({
  selector: 'mlb-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public search: FormGroup;
  public error: string;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.buildSearchForm();
  }

  private buildSearchForm(): void {
    this.search = this.formBuilder.group({
      content: ['']
    });
  }

  public searchProduct(): void {
    let content = this.search.get('content').value;
    let cep: string;
    const regexFormattedCEP = /\d{5}[-]\d{3}/g;
    const regexCEP = /\d{8}/g;

    if (content.match(regexCEP)) {
      const unformattedCEP = content.match(regexCEP)[0];
      cep = unformattedCEP.slice(0, 5) + '-' + unformattedCEP.slice(5, 8);
      content = content.replace(unformattedCEP, '');
    } else {
      cep = content.match(regexFormattedCEP)[0];
      content = content.replace(cep, '');
    }

    if (cep === null || cep === 'undefined') {
      this.error = 'Insira um CEP válido';
      return;
    }

    const request: SearchRequest = {
      cep,
      termoBusca: content
    };

    this.router.navigate(['/resultado'], { queryParams: request });
  }

  public clearError() {
    this.error = '';
  }
}
