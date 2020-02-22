import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar.component";
import {SearchBarModule} from "../search-bar/search-bar.module";

@NgModule({
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SearchBarModule
  ]
})
export class NavbarModule { }
