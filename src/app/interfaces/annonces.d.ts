export interface AnnonceItem{
    id_annonce : number;
    title_annonce : string;
    id_garage : number;
    description : string;
    kilometer : number;
    color : string;
    price: number;
    motor : string;
    id_model: string;
    id_finish : string;
    year_of_circulation : Date;
    creation_date_annonce : Date;
    date_sell? : Date;
    id_gear_type: number;
}