import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fuel } from 'src/app/interfaces/fuel';
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
    this.httpClient.get<Array<Fuel>>('http://formation-dwwm/Symfony/API_buisness_case/public/index.php/api/fuels')
      .subscribe(
        (response) => {
          console.log(response);
          
        }
      )
    return this.fuelsSubject;
  }
}
