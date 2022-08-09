import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

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

    //alert("IS LOGED IN? " +  this.isLoggedIn);
    //alert("Username? " +  this.user);
  }

  onScroll(event:any) {   
    //alert("ON SCROLL");
  }

}
