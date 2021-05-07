import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Car } from 'src/app/interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class CompareCarsService {

  public carsToCompare : Array<Car> = [];

  public arrayLengthSubject = new Subject<number>();
  public carsToCompareSubject = new Subject<Array<Car>>();

  constructor() { }

  public emitCarsToCompareSubject(){
    this.carsToCompareSubject.next(this.carsToCompare);
  }
  public emitArrayLengthSubject(){
    this.arrayLengthSubject.next(this.carsToCompare.length);
  }

  public addCarFromCompareArray(car : Car) {
    this.carsToCompare.push(car);
    this.emitCarsToCompareSubject();
    this.emitArrayLengthSubject();
    return this.carsToCompare;
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
    this.emitCarsToCompareSubject();
    this.emitArrayLengthSubject();
    return array;
  }

  public deleteAllCarToCompare() : Array<Car> {
    this.carsToCompare = [];
    this.emitCarsToCompareSubject();
    this.emitArrayLengthSubject();
    return this.carsToCompare;
  }
}
