import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fuel } from 'src/app/interfaces/fuel';
import { FuelData } from 'src/app/interfaces/fuelData';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuelService {

  public fuelsArray : Array<Fuel> = [];
  public fuelsSubject = new Subject<Array<Fuel>>();

  public emitFuelsSubject(){
    this.fuelsSubject.next(this.fuelsArray);
  }

  constructor(private httpClient : HttpClient) { }

  public getFuelsType(): Observable<Array<Fuel>>{
    this.httpClient.get<FuelData>('http://api.aymeric-bc.go.yo.fr/index.php/api/fuels')
      .subscribe(
        (response) => {
          console.log(response[0].data);
          this.fuelsArray = response[0].data;
          this.emitFuelsSubject();
        }
      )
    return this.fuelsSubject;
  }
}
