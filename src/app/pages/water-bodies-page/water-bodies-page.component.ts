import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { OverviewPageComponent } from '../overview-page/overview-page.component';

@Component({
  selector: 'app-water-bodies-page',
  templateUrl: '../overview-page/overview-page.component.html',
  styleUrls: ['../overview-page/overview-page.component.less', './water-bodies-page.component.less']
})
export class WaterBodiesPageComponent extends OverviewPageComponent {

  constructor(protected override imagesService: ImagesService) { 
    super(imagesService);
  }
  
  override ngOnInit(): void {
    super.ngOnInit();
  }

  override getImages(): { src: string; }[] {
    return [
      {src: 'https://source.unsplash.com/random/?rivers'},
      {src: 'https://source.unsplash.com/random/?lakes'},
      {src: 'https://source.unsplash.com/random/?waterfalls'},
      {src: 'https://source.unsplash.com/random/?canal'},
      {src: 'https://source.unsplash.com/random/?river-source'},
      {src: 'https://source.unsplash.com/random/?foutains'},
    ];
  }

  override getColor(): string {
    return 'rgba(0, 123, 123, .5)';
  }

}
