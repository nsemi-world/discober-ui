import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/adts/image';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.less']
})
export class OverviewPageComponent implements OnInit {

  @Input() topImage: string | undefined;
  @Input() images!: Image[];

  isLoggedIn: boolean = false;
  username!: string;



  constructor(protected imagesService: ImagesService) {
    this.imagesService.getImages().subscribe(
      (data: Image[]) => {
        this.images = data
      }
    );
  }

  ngOnInit(): void {
    this.initImages();
    document.getElementById('top-menu')!.style.backgroundColor = this.getColor();
  }

  initImages() {
    this.images = this.getImages();
  }

  getImages(): { src: string; }[]{
    return [];
  };

  getColor(): string {
    return 'rgba(0,0,123,.5)';
  }
}
