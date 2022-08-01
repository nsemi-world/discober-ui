import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.less']
})
export class TopMenuComponent implements OnInit {

  @Input() isLoggedIn: boolean = false;
  @Input() username!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onScroll(event:any) {   
    alert("ON SCROLL");
  }

  logout() {
    alert("Calling logout...");
  }

}
