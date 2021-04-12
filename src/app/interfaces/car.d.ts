export interface Car {
    id : number;
        price: number;
        kilometers : number;
        year : Date;
        fuel : {
            name: string;
        };
        model: {
            name : string;
            brand : {
                brand : string
            }
        };
        gear : {
            numberGear : number;
            description : string;
        };
        carType : {
            carType : string ;
        };
        title : string;
        description : string;
        color : string;
        finish : string;
        garage : {
            name: string;
            phone : string;
            streetNumber : string;
            street : string;
            city : string;
            numDept : string;
        };
        motor : string;
        creationDate : Date;
        date_sell? : Date;
}