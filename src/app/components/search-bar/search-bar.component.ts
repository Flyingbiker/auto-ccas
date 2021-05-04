import { FuelService } from './../../services/fuel/fuel.service';
import { Component, OnInit } from '@angular/core';
import { AnnonceService } from 'src/app/services/annonce/annonce.service';
import { SearchBarService } from 'src/app/services/search-bar/search-bar.service';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Model } from 'src/app/interfaces/model';
import { Subscription } from 'rxjs';
import { BrandData } from 'src/app/interfaces/brands-data';
import { Fuel } from 'src/app/interfaces/fuel';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit  {

  public brandsArray : BrandData | null = null;
  public totalAnnonces : number = 0;

  public selectedBrand = this.brandsArray?.data[0].brand;  
  public isBrandSelected : Boolean = false;

  public modelsArray : Array<Model> = [];
  public selectedModel = this.modelsArray[0]?.name;

  public fuelsArray : Array<Fuel> = [];

  //pour ngx-slider Km
  public minKm: number = 1000;
  public maxKm: number = 200000;
  optionsKm: Options = {
    floor: 0,
    ceil: 999999,
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
    floor: 50,
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
  private getFuelsTypeSubscription : Subscription;
  
  constructor(private searchBarService : SearchBarService,
              private annonceService : AnnonceService,
              private fuelService : FuelService) { }

  ngOnInit(): void {

    this.searchBarServiceSubscription = this.searchBarService.getAllBrands().subscribe(
      (response) => {
        console.log(response);
        
        this.brandsArray = response;
      }
    );    
    this.annonceServiceSubscription = this.annonceService.getAnnoncesByPage().subscribe(
      (response) => {
               
        this.totalAnnonces = response.totalItems;
        
        this.searchbarForm.reset({year: [response.stats[0].minYear,response.stats[0].maxYear]})
        this.searchbarForm.reset({price: [response.stats[0].minPrice,response.stats[0].maxPrice]})
        this.searchbarForm.reset({kilometers: [response.stats[0].minKm,response.stats[0].maxKm]})
      }
    ) ;

    //récupérer la liste des carburants
     this.getFuelsTypeSubscription = this.fuelService.getFuelsType().subscribe(
       (response) => {
         this.fuelsArray = response
       }
     )
    
  }

  public onSelectBrand(idBrand : number){
    // console.log("ID marque sélectionnée " + idBrand);
    this.isBrandSelected = true;
    this.annonceService.getModelByBrand(idBrand).subscribe(
      (response) => {
        this.modelsArray = response;        
      }
    );    
  }

  public onSelectModel(model : Model){
    //action quand choix du modèle
  }

  public onSubmitSearchForm(){
    console.log("envoi du formulaire, Marque: ", this.selectedBrand);    
  }

  public resetSearchForm(){
    //pour remettre à 0 les données de la barre de recherche
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
    //destroy les subscribes
    this.searchBarServiceSubscription.unsubscribe();
    this.annonceServiceSubscription.unsubscribe();
    this.getFuelsTypeSubscription.unsubscribe();
  }
}
