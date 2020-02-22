import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from "./search-result.component";
import {NavbarModule} from "../../components/navbar/navbar.module";


@NgModule({
  declarations: [ SearchResultComponent ],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    NavbarModule
  ]
})
export class SearchResultModule { }
