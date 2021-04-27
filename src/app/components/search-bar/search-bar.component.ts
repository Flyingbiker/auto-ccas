import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/interfaces/brand';
import { AnnonceService } from 'src/app/services/annonce/annonce.service';
import { SearchBarService } from 'src/app/services/search-bar/search-bar.service';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Model } from 'src/app/interfaces/model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit  {

  public brandsArray : Array<Brand> = [];
  public totalAnnonces : number = 0;

  public selectedBrand = this.brandsArray[0]?.brand;  
  public isBrandSelected : Boolean = false;

  public modelsArray : Array<Model> = [];
  public selectedModel = this.modelsArray[0]?.name;

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
    brandControl : new FormControl(''),
    year : new FormControl([2000, new Date().getFullYear()]),
    price : new FormControl([0,100000]),
    kilometers : new FormControl([0,200000]),
  })

  private searchBarServiceSubscription: Subscription;
  private annonceServiceSubscription: Subscription;
  
  constructor(private searchBarService : SearchBarService,
              private annonceService : AnnonceService) { }

  ngOnInit(): void {

    this.searchBarServiceSubscription = this.searchBarService.getAllBrands().subscribe(
      (response) => {
        this.brandsArray = response;
      }
    );    
    this.annonceServiceSubscription = this.annonceService.getAnnoncesByPage().subscribe(
      (response) => {
        console.log( response.stats.minYear);
        
        this.totalAnnonces = response.totalItems;
        
        this.searchbarForm.reset({year: [response.stats[0].minYear,response.stats[0].maxYear]})
        this.searchbarForm.reset({price: [response.stats[0].minPrice,response.stats[0].maxPrice]})
        this.searchbarForm.reset({kilometers: [response.stats[0].minKm,response.stats[0].maxKm]})
      }

    ) ;
    
  }

  public onSelectBrand(brand : Brand){
    console.log("marque sélectionnée " + brand.brand);
    this.isBrandSelected = true;
    this.annonceService.getModelByBrand(brand).subscribe(
      (response) => {
        this.modelsArray = response;        
      }
    );    
  }

  public onSelectModel(model : Model){
    //action quand choix du modèle
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
    //destroy les subscribes
    this.searchBarServiceSubscription.unsubscribe();
    this.annonceServiceSubscription.unsubscribe();
  }
}
