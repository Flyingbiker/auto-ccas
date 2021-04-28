export interface BrandData {
    data : Array<{
        id : number;
        brand: string;
        country : {
            id:number;
            country: string;
        };
        linkCarlogo : string;          
    }>;
}