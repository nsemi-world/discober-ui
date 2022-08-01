import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { OverviewPageComponent } from '../overview-page/overview-page.component';

@Component({
  selector: 'app-museums-page',
  templateUrl: '../overview-page/overview-page.component.html',
  styleUrls: ['../overview-page/overview-page.component.less','./museums-page.component.less']
})
export class MuseumsPageComponent  extends OverviewPageComponent {

  constructor(protected override imagesService: ImagesService) { 
    super(imagesService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override getImages(): { src: string; }[] {
    return [
      {src: 'https://source.unsplash.com/random/?museums'},
      {src: 'https://source.unsplash.com/random/?pergamon'},
      {src: 'https://source.unsplash.com/random/?gallery'},
      {src: 'https://source.unsplash.com/random/?arts'},
      {src: 'https://source.unsplash.com/random/?opera'},
      {src: 'https://source.unsplash.com/random/?ballet'},
    ];
  }

  override getColor(): string {
    return 'rgba(123, 123, 0, .5)';
  }

}
