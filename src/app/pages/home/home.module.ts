import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from "./home.component";
import {SearchBarModule} from "../../components/search-bar/search-bar.module";


@NgModule({
  declarations: [ HomeComponent ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SearchBarModule
    ]
})
export class HomeModule { }
