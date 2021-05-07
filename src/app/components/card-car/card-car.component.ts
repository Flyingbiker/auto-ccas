import { Car } from '../../interfaces/car';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AnnonceService } from 'src/app/services/annonce/annonce.service';
import { CompareCarsService } from 'src/app/services/compare-cars/compare-cars.service';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.scss']
})
export class CardCarComponent implements OnInit {

  @Input() annonce : Car;

  public carChecked = false;

  constructor(private router : Router, 
              private compareCarsService: CompareCarsService,
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

  public get checked() :boolean {
    if (this.carChecked !== undefined) {
      if (this.carChecked) {
        // console.log("true : ", this.carChecked, this.annonce);      
      } else {
        // console.log("false : ", this.carChecked, this.annonce);            
      }
    }
    return this.carChecked;
  }
  public set checked(value : boolean) {
    this.carChecked = value;
    if (value) {
      if ( this.compareCarsService.carsToCompare.includes(this.annonce)){
        console.error("car déja dans tableau alors que pas check" + value);
      } else {
        this.compareCarsService.carsToCompare.push(this.annonce);
        console.log("car mis dans tableau ", this.compareCarsService.carsToCompare);
      }
    } else {
      if ( this.compareCarsService.carsToCompare.includes(this.annonce)){
        this.deleteCarFromCompareArray(this.annonce, this.compareCarsService.carsToCompare);
        console.log("car retiré du tableau ", this.compareCarsService.carsToCompare);
      } else {
        console.error("car devait être retiré du tableau mais il n'y était plus");        
      }
    }

  }

  public deleteCarFromCompareArray(car : Car, array : Array<Car>) : Array<Car> {
    let len = array.length;
    let i = len-1;
    for (i ; i>=0 ; i--){
      if (car === array[i]){
        array.splice(i,1);
      } else {
        console.log("valeur différente !");        
      }
    }
    return array;
  }
}