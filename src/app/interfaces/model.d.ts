import {Brand} from './brand.d' ;

export interface Model {
    id : number;
    brand: {
        id :number;
        brand: string;
    };
    name: string;
}