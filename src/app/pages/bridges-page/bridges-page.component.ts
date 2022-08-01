import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { OverviewPageComponent } from '../overview-page/overview-page.component';

@Component({
  selector: 'app-bridges-page',
  templateUrl: '../overview-page/overview-page.component.html',
  styleUrls: ['../overview-page/overview-page.component.less', './bridges-page.component.less']
})
export class BridgesPageComponent extends OverviewPageComponent {

  constructor(protected override imagesService: ImagesService) { 
    super(imagesService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override getImages(): { src: string; }[] {
    return [
      {src: 'https://source.unsplash.com/random/?bridges'},
      {src: 'https://source.unsplash.com/random/?berlin'},
      {src: 'https://source.unsplash.com/random/?river'},
      {src: 'https://source.unsplash.com/random/?lakes'},
      {src: 'https://source.unsplash.com/random/?bridges,berlin'},
      {src: 'https://source.unsplash.com/random/?bridges,berlin'},
      {src: 'https://source.unsplash.com/random/?bridges,berlin'},
    ];
  }

  override getColor(): string {
    return 'rgba(0,0,123,.5)';
  }




}
