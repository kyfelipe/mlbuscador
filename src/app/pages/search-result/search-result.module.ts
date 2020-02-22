import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from "./search-result.component";
import {NavbarModule} from "../../components/navbar/navbar.module";
import {CardModule} from "../../components/card/card.module";
import {Card2Module} from "../../components/card2/card2.module";


@NgModule({
  declarations: [ SearchResultComponent ],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    NavbarModule,
    CardModule,
    Card2Module
  ]
})
export class SearchResultModule { }
