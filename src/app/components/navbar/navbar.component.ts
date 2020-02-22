import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mlb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() search_bar: boolean = true;

  constructor() { }

  ngOnInit(): void { }

}
