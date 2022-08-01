import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-top-menu-options',
  templateUrl: './top-menu-options.component.html',
  styleUrls: ['./top-menu-options.component.less']
})
export class TopMenuOptionsComponent implements OnInit {

  background: ThemePalette = 'warn';
  links = [
    {name: 'Home', route: "home"}, 
    {name: 'Bridges', route: "bridges"}, 
    {name: 'Churches', route: "churches"},
    {name: 'Museums', route: "museums"},
    {name: 'Parks', route: "parks"},
    {name: 'Water Bodies', route: "waterbodies"},    
    {name: 'Start Tour', route: "start-tour"}
  ];
  active = "";

  constructor() { }

  ngOnInit(): void {
  }

}
