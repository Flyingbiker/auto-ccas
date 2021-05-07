import { Injectable } from '@angular/core';
import { Car } from 'src/app/interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class CompareCarsService {

  public carsToCompare : Array<Car> = [];

  constructor() { }
}
