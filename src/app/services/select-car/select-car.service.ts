import { Injectable } from '@angular/core';
import { Car } from 'src/app/interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class SelectCarService {

  public selectedCarsArray : Array<Car> = [];

  constructor() { }

  
}
