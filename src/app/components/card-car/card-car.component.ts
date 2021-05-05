import { Car } from '../../interfaces/car';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AnnonceService } from 'src/app/services/annonce/annonce.service';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.scss']
})
export class CardCarComponent implements OnInit {

  @Input() annonce : Car;

  constructor(private router : Router, 
              private annonceService : AnnonceService) { }

  ngOnInit(): void {
  }

  /**
   * to save the car detail for the card clicked and navigate to the car-details-view
   */
  public storeCarDetails(car : Car) {
    this.annonceService.storeCarDetails(car);
    this.router.navigate(['/car-details']);
  }
}
