import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mlb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() searchBar: boolean = true;
  @Input() cep: string;
  @Input() city: string;

  constructor() { }

  ngOnInit(): void { }

}
