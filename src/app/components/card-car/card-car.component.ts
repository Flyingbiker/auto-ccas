import { AnnonceItem } from './../../interfaces/annonces.d';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.scss']
})
export class CardCarComponent implements OnInit {

  @Input() annonces : Array<AnnonceItem>;

  constructor() { }

  ngOnInit(): void {
  }

}
