import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/interfaces/brand';
import { AnnonceService } from 'src/app/services/annonce/annonce.service';
import { SearchBarService } from 'src/app/services/search-bar/search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit  {

  public brandsArray : Array<Brand> = [];

  public totalAnnonces : number = 0;

  constructor(private searchBarService : SearchBarService,
              private annonceService : AnnonceService) { }

  ngOnInit(): void {
    this.searchBarService.getAllBrands().subscribe(
      (response) => {
        this.brandsArray = response;
        console.log(this.brandsArray);
      }
    );    
    this.annonceService.getAnnoncesByPage().subscribe(
      (response) => {
        console.log(response);
        this.totalAnnonces = response.totalItems;
      }

    ) ;
    
  }

}
