import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from "./search-result.component";
import {NavbarModule} from "../../components/navbar/navbar.module";
import {CardModule} from "../../components/card/card.module";


@NgModule({
  declarations: [ SearchResultComponent ],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    NavbarModule,
    CardModule
  ]
})
export class SearchResultModule { }
