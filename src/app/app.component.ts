import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'descobrir-berlin'; 

  private roles!: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username!: string;
 
  constructor(private tokenStorageService: TokenStorageService) { }
 
  ngOnInit(): void {
    this.isLoggedIn = this.tokenStorageService.hasLoggedInUser()   ;

    //alert("ngOnInit ==> " + this.isLoggedIn);

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles; 
    }
  }
 
}
