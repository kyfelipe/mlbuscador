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
    const regex = /\d{5}[-]\d{3}|\d{8}/g;
    const cep = content.match(regex);
    content = content.replace(cep, '');
    content = content.replace('  ', ' ');

    if (cep === null || cep === 'undefined') {
      this.error = 'Insira um CEP válido';
      return;
    }

    const request: SearchRequest = {
      cep: cep[0],
      termoBusca: content
    };

    this.router.navigate(['/resultado'], { queryParams: request });
  }

  public clearError() {
    this.error = '';
  }
}
