import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { OverviewPageComponent } from '../overview-page/overview-page.component';

@Component({
  selector: 'app-churches-page',
  templateUrl: '../overview-page/overview-page.component.html',
  styleUrls: ['../overview-page/overview-page.component.less', './churches-page.component.less']
})
export class ChurchesPageComponent extends OverviewPageComponent {

  constructor(protected override imagesService: ImagesService) { 
    super(imagesService);
  }
  override ngOnInit(): void {
    super.ngOnInit();
  }

  override getImages(): { src: string; }[] {
    return [
      {src: 'https://source.unsplash.com/random/?churches'},
      {src: 'https://source.unsplash.com/random/?chapels'},
      {src: 'https://source.unsplash.com/random/?monastery'},
      {src: 'https://source.unsplash.com/random/?mosque'},
      {src: 'https://source.unsplash.com/random/?synagogue'},
      {src: 'https://source.unsplash.com/random/?tempel'},
    ];
  }

  override getColor(): string {
    return 'rgba(123, 0, 0, .5)';
  }


}
