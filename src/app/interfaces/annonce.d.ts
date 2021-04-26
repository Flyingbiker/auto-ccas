import {Car} from './car.d';

export interface Annonce{
    totalItems : number;
    views: {
        firstPage : string ;
        nextPage? : string ;
        previousPage? : string ;
        lastPage : string ;
    };
    stats: {
        minKm: string,
        maxKm: string,
        minYear: string,
        maxYear: string,
        minPrice: string,
        maxPrice: string,
    }
    data : Array<Car>;
}

// version avec l'API PHP
// export interface Annonce{
//     id_annonce : number;
//     title_annonce : string;
//     id_garage : number;
//     description : string;
//     kilometer : number;
//     color : string;
//     price: number;
//     motor : string;
//     model: string;
//     brand:string;
//     finish : string;
//     year_of_circulation : Date;
//     creation_date_annonce : Date;
//     date_sell? : Date;
//     id_gear_type: string;
// }