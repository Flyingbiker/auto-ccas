import { Subscription } from 'rxjs';
import { Annonce } from '../../interfaces/annonce';
import { Car } from '../../interfaces/car';
import { Component, OnInit } from '@angular/core';
import { AnnonceService } from 'src/app/services/annonce/annonce.service';
import { HttpClient } from '@angular/common/http';
import { CompareCarsService } from 'src/app/services/compare-cars/compare-cars.service';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss']
})
export class CardsViewComponent implements OnInit {

  public annoncesArray : Array<Car> = []; 
  public pages = [] ;

  public isPageLoading : boolean = true;

  public prevLink : string |null = null ;
  public nextLink : string |null = null ;
  public lastLink : string |null = null ;
  public actualPage : number = 0;
 
  public collectionSize : number = 100;

  public page = 1;

  public numberCarsToCompare : number = 0;

  private compareCarsServiceSubscription : Subscription;

  constructor(private annonceService: AnnonceService,
              private compareCarsService : CompareCarsService) {  }

  ngOnInit(): void {
    this.isPageLoading = true;
    this.annonceService.getAnnoncesByPage().subscribe(
      (response) => {
        this.annoncesArray = response.data;
        this.collectionSize = response.totalItems;

        this.isPageLoading = false;

        if ( response.views.lastPage === undefined){

        } else {
          const regex = /\?.*page=([0-9]+)/;
          const string = response.views.lastPage;
          
          const matches = string.match(regex);
          if (matches !== null){
            for (let i=1; i <= parseInt(matches[1]) ; i++){
              this.pages.push(i);
            }
            // this.pages = parseInt(matches[1]);
          }
        }
      }      
    );

    this.compareCarsServiceSubscription = this.compareCarsService.arrayLengthSubject.subscribe(
      (response) => {
        this.numberCarsToCompare = response
      }
    )
  }

  public loadPageByNumber(page : number ) :void {
    this.isPageLoading = true;
    page -= 1;
    if (page !== this.page){
      this.actualPage = page;
      this.page = page;
      this.annonceService.getAnnoncesByPage(page).subscribe(
        (response) => {
          console.log(response.data);
          
          this.annoncesArray = response.data;
          this.collectionSize = response.totalItems;

          this.isPageLoading = false;
        }
      )
    }
  }

  public isEnoughCarsToCompare() : boolean {
    if (this.numberCarsToCompare > 1) {
      return true;
    } else {return false;}
  }
  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.compareCarsServiceSubscription.unsubscribe();
  }

}
