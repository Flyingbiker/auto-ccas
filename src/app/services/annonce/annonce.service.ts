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
  private annonces : Annonce | null = null;
  public annoncesSubject = new Subject<Annonce>();

  private totalAnnonces : number | null = null ;

  constructor(private httpClient : HttpClient) { }

  public emitAnnoncesSubject(){
    this.annoncesSubject.next(this.annonces);
  }

  public getAnnoncesByPage(page : number = 0) : Observable<Annonce> {
    
    this.httpClient.get<Annonce>('http://formation-dwwm/Symfony/API_buisness_case/public/index.php/api/cars?page='+page)
      .subscribe(
        (response) => {
          this.annonces = response;
          this.carsArray = response.data; 
          this.totalAnnonces = response.totalItems;  
           
          this.emitAnnoncesSubject();    
        }, 
        (error) => {
          throw 'Erreur lors de la récupération des annonces :' + error.message;
        }
      );
      
      return this.annoncesSubject;
  }

}
