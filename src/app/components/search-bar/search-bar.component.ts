import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/interfaces/brand';
import { AnnonceService } from 'src/app/services/annonce/annonce.service';
import { SearchBarService } from 'src/app/services/search-bar/search-bar.service';
import { Options, LabelType, ChangeContext } from '@angular-slider/ngx-slider';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Subject } from 'rxjs';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit  {

  public brandsArray : Array<Brand> = [];
  public totalAnnonces : number = 0;
  
  public changeContextPrice : ChangeContext;

  //pour ngx-slider Km
  public minKm: number = 1000;
  public maxKm: number = 200000;
  optionsKm: Options = {
    floor: 0,
    ceil: 999999,
    step:1,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Km min: </b> ' + value + 'km';
        case LabelType.High:
            return '<b>Km max: </b> ' + value + 'km';
        default:
          return value + 'km';
      }
    }
  };


  //pour ngx-slider Price
    // public minPrice: number = 1000;
    // public maxPrice: number = 100000;
  optionsPrice: Options = {
    floor: 0,
    ceil: 100000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Prix min:</b> ' + value  + '€';
        case LabelType.High:
          return '<b>Prix max:</b> ' + value  + '€';
        default:
          return value + '€';
      }
    }
  };
  

  //pour ngx-slider Year
    // public minYear: number = 2000;
    // public maxYear: number = new Date().getFullYear();
  optionsYear: Options = {
    floor: 2000,
    ceil: new Date().getFullYear(),
    step:1,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Année min:</b> ' + value  + '€';
        case LabelType.High:
          return '<b>Année max:</b> ' + value  + '€';
        default:
          return value.toString();
      }
    }
  };

  searchbarForm :FormGroup = new FormGroup({
    brandControl : new FormControl('', Validators.required),
    year : new FormControl([2000, new Date().getFullYear()]),
    price : new FormControl([0,100000]),
    kilometers : new FormControl([0,200000]),
  })
  selectedBrand = this.brandsArray[0]?.brand;

  constructor(private searchBarService : SearchBarService,
              private annonceService : AnnonceService) { }

  ngOnInit(): void {

    this.searchBarService.getAllBrands().subscribe(
      (response) => {
        this.brandsArray = response;
      }
    );    
    this.annonceService.getAnnoncesByPage().subscribe(
      (response) => {
        console.log(response.stats[0].maxKm, response.stats.minPrice);
        console.log( response.stats.minYear);
        
        this.totalAnnonces = response.totalItems;
        
        this.searchbarForm.reset({year: [response.stats[0].minYear,response.stats[0].maxYear]})
        this.searchbarForm.reset({price: [response.stats[0].minPrice,response.stats[0].maxPrice]})
        this.searchbarForm.reset({kilometers: [response.stats[0].minKm,response.stats[0].maxKm]})
      }

    ) ;
    
  }

  public onSelectBrand(value : Brand){
    console.log("marque sélectionnée " + value.brand);
    //faire l'appel à l'API pour récupérer les moodèles
  }

}
