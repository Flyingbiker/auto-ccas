import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annonce } from 'src/app/interfaces/annonce';
import { Car } from 'src/app/interfaces/car';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private carsArray : Array<Car> = [];
  public annoncesSubject = new Subject<Array<Car>>();

  constructor(private httpClient : HttpClient) { }

  public emitAnnoncesSubject(){
    this.annoncesSubject.next(this.carsArray.slice());
  }

  public getAllAnnonces() : Observable<Array<Car>> {
    
    // this.httpClient.get<Array<Annonce>>('http://formation-dwwm/PHP/API_BackOffice_BC/index.php?controller=allAnnonces')
    this.httpClient.get<Annonce>('http://formation-dwwm/Symfony/API_buisness_case/public/index.php/api/cars')
      .subscribe(
        (response) => {
          this.carsArray = response.data;  
          this.emitAnnoncesSubject();                 
        }, 
        (error) => {
          throw 'Erreur lors de la récupération des annonces :' + error.message;
        }
      );
      
      return this.annoncesSubject;
  }

}
