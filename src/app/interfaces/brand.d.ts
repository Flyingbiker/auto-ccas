import { Model } from './model.d';

export interface Brand {
    id : number;
    brand: string;
    country : {
        country: string;
    };
    linkCarlogo : string;  
    models:Array<Model>;
}