import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Brand } from 'src/app/interfaces/brand';
import { BrandData } from 'src/app/interfaces/brands-data';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  private brandsArray : Array<Brand> = [];
  public brandsSubject = new Subject<Array<Brand>>();

  constructor(private httpClient : HttpClient) { }

  public emitBrandsSubject(){
    this.brandsSubject.next(this.brandsArray.slice());
  }

  public getAllBrands() : Observable<Array<Brand>> {
    this.httpClient.get<BrandData>('http://formation-dwwm/Symfony/API_buisness_case/public/index.php/api/brands')
      .subscribe(
        (response) => {
          // console.log(response.data);
          this.brandsArray = response.data;
          this.emitBrandsSubject();
        }, 
        (error) => {
          throw 'Erreur lors de la récupération des marques : ' + error.message;
        }
      );
      return this.brandsSubject;
  }
}
