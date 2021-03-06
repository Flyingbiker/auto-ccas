import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annonce } from 'src/app/interfaces/annonce';
import { Car } from 'src/app/interfaces/car';
import { Subject, Observable } from 'rxjs';
import { Brand } from 'src/app/interfaces/brand';
import { Model } from 'src/app/interfaces/model';
import { BrandData } from 'src/app/interfaces/brands-data';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  public carsArray : Array<Car> = [];
  public annonces : Annonce | null = null;
  public annoncesSubject = new Subject<Annonce>();

  public modelsArray : Array<Model> = [];
  public modelsSubject = new Subject<Array<Model>>();

  private totalAnnonces : number | null = null ;

  public carSelected : Car | null = null;

  constructor(private httpClient : HttpClient) { }

  public emitAnnoncesSubject(){
    this.annoncesSubject.next(this.annonces);
  }

  public emitModelsSubject(){
    this.modelsSubject.next(this.modelsArray)
  }

  public getAnnoncesByPage(page : number = 0) : Observable<Annonce> {
    this.httpClient.get<Annonce>('http://api.aymeric-bc.go.yo.fr/index.php/api/cars?page='+page)
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

  public getAnnoncesByBrand(brand : Brand) : Observable<Annonce> {
    this.httpClient.get<Annonce>('http://api.aymeric-bc.go.yo.fr/index.php/api/cars?brand='+brand.data.id)
      .subscribe(
        (response) => {
          this.annonces = response;
          this.carsArray = response.data;

          this.totalAnnonces = this.carsArray.length;
          
          this.emitAnnoncesSubject();
        }, 
        (error) => {
          throw 'Erreur lors de la récupération des annonces :' + error.message;
        }
      )
    return this.annoncesSubject
  }

  public getModelByBrand(idBrand : number) : Observable<Array<Model>> {
    if (idBrand !== null){
      this.httpClient.get<Brand>('http://api.aymeric-bc.go.yo.fr/index.php/api/brands/'+idBrand)
        .subscribe(
          (response) => {
            
            this.modelsArray = response.data.models;
            
            this.emitModelsSubject();
          }
        ),
        (error) => {
          throw 'Erreur lors de la récupération des modèles :' + error.message;
        }
      return this.modelsSubject;
    }
  }

  public getAnnoncesByQuery(queryApi : string): Observable<Annonce>{
    this.httpClient.get<Annonce>(queryApi)
      .subscribe(
        (response) => {
          this.annonces = response;
          this.carsArray =response.data;

          this.totalAnnonces = this.carsArray.length;

          this.emitAnnoncesSubject();
        }
        
      )
    return this.annoncesSubject;
  }

  /**
   * register Car details when click detected
   */
  public storeCarDetails(car : Car) : Car {
    return this.carSelected = car;
  }

}
