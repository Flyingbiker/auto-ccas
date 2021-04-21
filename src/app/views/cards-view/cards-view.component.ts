import { Annonce } from '../../interfaces/annonce';
import { Car } from '../../interfaces/car';
import { Component, OnInit } from '@angular/core';
import { AnnonceService } from 'src/app/services/annonce/annonce.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss']
})
export class CardsViewComponent implements OnInit {

  annoncesArray : Array<Car> = [];  

  constructor(private annonceService: AnnonceService) {  }

  ngOnInit(): void {
    this.annonceService.getAllAnnonces().subscribe(
      (response) => {
        this.annoncesArray = response.data;
      }      
    );
  }

}
