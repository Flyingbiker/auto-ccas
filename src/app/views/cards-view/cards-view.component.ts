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
  public nextlastLink : string |null = null ;
  public actualPage : number = 0;
  

  constructor(private annonceService: AnnonceService) {  }

  ngOnInit(): void {
    this.annonceService.getAnnoncesByPage().subscribe(
      (response) => {
        this.annoncesArray = response.data;

        if ( response.views.lastPage === undefined){

        } else {
          const regex = /\?.*page=([0-9]+)/;
          const string = response.views.lastPage;
          
          const matches = string.match(regex);
          if (matches !== null){
            console.log(matches);
            for (let i=1; i < parseInt(matches[1]) ; i++){
              this.pages.push(i);
            }
            // this.pages = parseInt(matches[1]);
          }
        }
      }      
    );
  }

  //faire methode pour loadNextPage
  public loadNextPage() : void {
    this.annonceService.getAnnoncesByPage()
  }
  //faire methode pour loadPreviousPage
  public loadPreviousPage() :void {
    
  }
  //faire methode pour loadPageByNumber
  //faire methode pour loadPage


}
