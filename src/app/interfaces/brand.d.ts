import { Model } from './model.d';

export interface Brand {
    data: {
        id : number;
        brand: string;
        country : {
            id:number;
            country: string;
        };
        linkCarlogo : string;  
        models:Array<Model>;
    }
}