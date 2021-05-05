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
  public selectedFuel = this.fuelsArray[0]?.name;

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
    public minPrice: number = 1000;
    public maxPrice: number = 100000;
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
    public minYear: number = 2000;
    public maxYear: number = new Date().getFullYear();
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

  searchbarForm : FormGroup = new FormGroup({
    brand : new FormControl(''),
    model : new FormControl({value:'', disabled: true}),
    fuel : new FormControl(''),
    kilometers : new FormControl([0,200000]),
    year : new FormControl([2000, new Date().getFullYear()]),
    price : new FormControl([50,100000]),
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
        // console.log(response);
        
        this.brandsArray = response;
      }
    );    
    this.annonceServiceSubscription = this.annonceService.getAnnoncesByPage().subscribe(
      (response) => {
               
        this.totalAnnonces = response.totalItems;
        console.log("response.totalItems :" + response.totalItems);

        if (response.totalItems === 0 ){
          this.searchbarForm.reset({year: [2020,2020], price: [0,0], kilometers: [0,0]});
        } else {
          let string = ''
          if (this.searchbarForm.value.brand !== undefined){
            string += 'brand: ' + this.searchbarForm.value.brand + ',' ;
          }
          if (this.searchbarForm.value.model !== undefined){
            string += 'model: ' + this.searchbarForm.value.model + ',' ;
          }
          if (this.searchbarForm.value.fuel !== undefined){
            string += 'fuel: ' + this.searchbarForm.value.fuel + ',' ;
          }
          console.log(string);
          this.searchbarForm.reset({         
            string,             
            kilometers: [response.stats[0].minKm,response.stats[0].maxKm], 
            year: [response.stats[0].minYear,response.stats[0].maxYear],
            price: [response.stats[0].minPrice,response.stats[0].maxPrice]
            });          
        }
        
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

        //pour réactiver le champs modèle
        this.searchbarForm.controls.model.enable();
      }
    );    
  }

  public onSelectModel(model : Model){
    //action quand choix du modèle
  }

  public onSelectFuel(fuel : Fuel){
    //action quand choix du carburant
  }

  public onSubmitSearchForm(){
    console.log("envoi du formulaire, Marque: ", this.searchbarForm.value.brand);    
    console.log("envoi du formulaire, Marque: ", this.searchbarForm.value.model);    
    const url = 'http://api.aymeric-bc.go.yo.fr/index.php/api/cars';
    let query = url;
    
    console.log("query : " + query);    
    if (query === url){
      query += '?';
    }
    console.log("query : " + query);    

    if (this.searchbarForm.value.brand !== null){
      query += '&brand=' + this.searchbarForm.value.brand;
      if (this.searchbarForm.value.model !== null) {
        query += "&model=" + this.searchbarForm.value.model;
      }
    }
    if (this.searchbarForm.value.fuel !== null) {
      query += "&fuel=" + this.searchbarForm.value.fuel;
    }
    
    console.log("envoi requête : " + query);  
    this.annonceService.getAnnoncesByQuery(query).subscribe(
      (response) => {

      }
    );    
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
