import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/adts/user';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-profile-jumbotron',
  templateUrl: './profile-jumbotron.component.html',
  styleUrls: ['./profile-jumbotron.component.less']
})
export class ProfileJumbotronComponent implements OnInit {
 
  currentUser!: User;
  tokenStorageService: TokenStorageService = new TokenStorageService();

  constructor(tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
  }

}
