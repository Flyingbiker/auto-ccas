import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  
  images = ['../../../assets/caroussel/slider-1.jpg',
    '../../../assets/caroussel/slider-2.jpg','../../../assets/caroussel/slider-3.jpg']
  constructor() { }

  ngOnInit(): void {
  }

}
