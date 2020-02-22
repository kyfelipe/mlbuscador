import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card2Component } from './card2.component';



@NgModule({
    declarations: [Card2Component],
    exports: [
        Card2Component
    ],
    imports: [
        CommonModule
    ]
})
export class Card2Module { }
