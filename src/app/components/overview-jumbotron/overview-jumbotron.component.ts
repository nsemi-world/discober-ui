import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-jumbotron',
  templateUrl: './overview-jumbotron.component.html',
  styleUrls: ['./overview-jumbotron.component.less']
})
export class OverviewJumbotronComponent implements OnInit {

  selectedIndex = 0;
  @Input() topImage: string | undefined;
  @Input() images = [
    {src: 'https://source.unsplash.com/random/?bridges'},
    {src: 'https://source.unsplash.com/random/?berlin'},
    {src: 'https://source.unsplash.com/random/?river'},
    {src: 'https://source.unsplash.com/random/?lakes'},
    {src: 'https://source.unsplash.com/random/?bridges,berlin'},
    {src: 'https://source.unsplash.com/random/?bridges,berlin'},
    {src: 'https://source.unsplash.com/random/?bridges,berlin'},
    /*{src: 'https://source.unsplash.com/random/?bridges,berlin'},
    {src: 'https://source.unsplash.com/random/?bridges,berlin'},
    {src: 'https://source.unsplash.com/random/?bridges,berlin'},
    {src: 'https://source.unsplash.com/random/?bridges,berlin'},
    {src: 'https://source.unsplash.com/random/?bridges,berlin'},
    {src: 'https://source.unsplash.com/random/?bridges,berlin'},
    {src: 'https://source.unsplash.com/random/?bridges,berlin'},*/
  ];

  constructor() { }

  ngOnInit(): void {
    this.topImage = this.images[0].src;
  }

  updateTopImage(i:number) {
   // alert('Updating top image...');
    this.topImage = this.images[i].src;
    this.selectedIndex = i;
  }

  indexLessThan(i: number) {
    return i  < 5;
  }

}
