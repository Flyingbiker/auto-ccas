import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/interfaces/brand';
import { AnnonceService } from 'src/app/services/annonce/annonce.service';
import { SearchBarService } from 'src/app/services/search-bar/search-bar.service';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit  {

  public brandsArray : Array<Brand> = [];

  public totalAnnonces : number = 0;

  //pour ngx-slider Km
  valueKm: number = 150000;
  optionsKm: Options = {
    floor: 0,
    ceil: 200000,
    step:1000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Km max: </b> ' + value + 'km';
        default:
          return value + 'km';
      }
    }
  };

  //pour ngx-slider Price
  minValuePrice: number = 1000;
  maxValuePrice: number = 50000;
  optionsPrice: Options = {
    floor: 0,
    ceil: 100000,
    step:500,
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

  searchbarForm = new FormGroup({
    brandControl : new FormControl('', Validators.required)

  })
  selectedBrand = this.brandsArray[0]?.brand;

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

  public onSelectBrand(){
    console.log("marque sélectionnée");
    
  }

}
