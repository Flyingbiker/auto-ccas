import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car';
import { CompareCarsService } from 'src/app/services/compare-cars/compare-cars.service';

@Component({
  selector: 'app-compare-cars-view',
  templateUrl: './compare-cars-view.component.html',
  styleUrls: ['./compare-cars-view.component.scss']
})
export class CompareCarsViewComponent implements OnInit {

  public carsToCompare : Array<Car> = [];

  constructor(private compareCarsService: CompareCarsService) { }

  ngOnInit(): void {
      this.carsToCompare = this.compareCarsService.carsToCompare;
  }

  public deleteAllCarsToCompare() : Array<Car> {
      return this.carsToCompare = this.compareCarsService.deleteAllCarsToCompare()
  }

  public deleteCarFromTable(car:Car): Array<Car> {
      this.compareCarsService.deleteCarFromCompareArray(car, this.carsToCompare);
      return this.carsToCompare;
  }
}
