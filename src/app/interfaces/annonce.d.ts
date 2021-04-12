import {Car} from './car.d';

export interface Annonce{
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