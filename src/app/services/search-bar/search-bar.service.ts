import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Brand } from 'src/app/interfaces/brand';
import { BrandData } from 'src/app/interfaces/brands-data';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  private brandsArray : BrandData | null = null;
  public brandsSubject = new Subject<BrandData>();

  constructor(private httpClient : HttpClient) { }

  public emitBrandsSubject(){
    this.brandsSubject.next(this.brandsArray);
  }

  public getAllBrands() : Observable<BrandData> {
    this.httpClient.get<BrandData>('http://formation-dwwm/Symfony/API_buisness_case/public/index.php/api/brands')
      .subscribe(
        (response) => {
          // console.log(response);
          
          this.brandsArray = response;
          this.emitBrandsSubject();
        }, 
        (error) => {
          throw 'Erreur lors de la récupération des marques : ' + error.message;
        }
      );
      return this.brandsSubject;
  }
}
