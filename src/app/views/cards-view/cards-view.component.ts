import { Annonce } from '../../interfaces/annonce';
import { Car } from '../../interfaces/car';
import { Component, OnInit } from '@angular/core';
import { AnnonceService } from 'src/app/services/annonce/annonce.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss']
})
export class CardsViewComponent implements OnInit {

  public annoncesArray : Array<Car> = []; 
  public pages = [] ;

  public prevLink : string |null = null ;
  public nextLink : string |null = null ;
  public lastLink : string |null = null ;
  public actualPage : number = 0;
 
  public collectionSize : number = 100;

  public page = 1;

  constructor(private annonceService: AnnonceService) {  }

  ngOnInit(): void {
    this.annonceService.getAnnoncesByPage().subscribe(
      (response) => {
        this.annoncesArray = response.data;
        this.collectionSize = response.totalItems;

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
    console.log(this.annoncesArray);
    
  }

  //faire methode pour loadPageByNumber
  public loadPageByNumber(page : number ) :void {
    page -= 1;
    if (page !== this.page){
      this.actualPage = page;
      this.page = page;
      this.annonceService.getAnnoncesByPage(page).subscribe(
        (response) => {
          this.annoncesArray = response.data;
          this.collectionSize = response.totalItems;
        }
      )
    }
  }


}
