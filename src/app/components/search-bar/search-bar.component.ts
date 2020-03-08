import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'mlb-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public search: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.buildSearchForm();
  }

  private buildSearchForm() {
    this.search = this.formBuilder.group({
      content: ['']
    });
  }

  public searchProduct() {
    // console.log(this.search.get('content').value);
    this.router.navigate(['/resultado']);
  }
}
