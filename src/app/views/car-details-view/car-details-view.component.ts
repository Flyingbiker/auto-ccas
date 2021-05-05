import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car';
import { AnnonceService } from 'src/app/services/annonce/annonce.service';

@Component({
  selector: 'app-car-details-view',
  templateUrl: './car-details-view.component.html',
  styleUrls: ['./car-details-view.component.scss']
})
export class CarDetailsViewComponent implements OnInit {

  public carDetails : Car | null = null ;

  constructor(private annonceService : AnnonceService) { }

  ngOnInit(): void {
    if (this.annonceService.carSelected !== null) {
      this.carDetails = this.annonceService.carSelected;
    }
  }

}
