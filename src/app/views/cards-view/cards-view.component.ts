import { AnnonceItem } from './../../interfaces/annonces.d';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss']
})
export class CardsViewComponent implements OnInit {

  arrayAnnonces : Array<AnnonceItem> = [
    {id_annonce : 1,
      title_annonce : "première vente",
      id_garage : 1,
      description : "courte description",
      kilometer : 10000,
      color : "rouge flamme",
      price: 20000,
      motor : "1.6 110ch essence",
      id_model: "clio",
      id_finish : "exclusive",
      year_of_circulation : new Date(2009,10,3),
      creation_date_annonce : new Date(2019,11,3),      
      id_gear_type: 1},
    {id_annonce : 2,
      title_annonce : "voiture de course",
      id_garage : 1,
      description : "description musclée",
      kilometer : 50000,
      color : "vert olive",
      price: 30000,
      motor : "2.1 150ch essence",
      id_model: "c220",
      id_finish : "dynamique",
      year_of_circulation : new Date(2000,12,3),
      creation_date_annonce : new Date(2020,1,3),      
      id_gear_type: 2},
    {id_annonce : 3,
      title_annonce : "c'est la  vente",
      id_garage : 1,
      description : "description de Chloé",
      kilometer : 100000,
      color : "bleu ciel",
      price: 10000,
      motor : "1.1 90ch diesel",
      id_model: "106",
      id_finish : "kid",
      year_of_circulation : new Date(2005,11,3),
      creation_date_annonce : new Date(2015,2,3),      
      id_gear_type: 3},

  ];

  constructor() { }

  ngOnInit(): void {

  }

}
