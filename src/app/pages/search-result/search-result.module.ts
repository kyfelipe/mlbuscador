import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from './search-result.component';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { CardModule } from '../../components/card/card.module';
import { SearchResultResolver } from './search-result.resolver';
import { SearchService } from '../../shared/service/search/search.service';

@NgModule({
  declarations: [ SearchResultComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    SearchResultRoutingModule,
    NavbarModule,
    CardModule
  ],
  providers: [
    SearchResultResolver,
    SearchService
  ]
})
export class SearchResultModule { }
