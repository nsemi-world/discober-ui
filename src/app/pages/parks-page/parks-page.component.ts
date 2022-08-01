import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { OverviewPageComponent } from '../overview-page/overview-page.component';

@Component({
  selector: 'app-parks-page',
  templateUrl: '../overview-page/overview-page.component.html',
  styleUrls: ['../overview-page/overview-page.component.less', './parks-page.component.less']
})
export class ParksPageComponent extends OverviewPageComponent {

  constructor(protected override imagesService: ImagesService) { 
    super(imagesService);
  }
  
  override ngOnInit(): void {
    super.ngOnInit();
  }

  override getImages(): { src: string; }[] {
    return [
      {src: 'https://source.unsplash.com/random/?parks'},
      {src: 'https://source.unsplash.com/random/?volkspark'},
      {src: 'https://source.unsplash.com/random/?gardens'},
      {src: 'https://source.unsplash.com/random/?flowers'},
      {src: 'https://source.unsplash.com/random/?trees'},
      {src: 'https://source.unsplash.com/random/?mushrooms'},
    ];
  }

  override getColor(): string {
    return 'rgba(0, 123, 0, .5)';
  }

}
