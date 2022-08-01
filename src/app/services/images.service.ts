import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppDomain } from '../adts/app-domain';
import { Image } from '../adts/image';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }


  getImages(): Observable<Image[]> {
    alert('Will retrieve images from... ' + new AppDomain().getImagesUrl());
    return this.http.get<Image[]>(new AppDomain().getImagesUrl());
  }



}
