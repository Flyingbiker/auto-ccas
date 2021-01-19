export class Model {
    private id_model : number;
    private wording_model : string;
    private id_car_type : number;
    private brand : string;
    private number_seat : number;

    constructor(wording_model : string,
                id_car_type : number,
                brand : string,
                number_seat : number){        
        this.wording_model = wording_model;
        this.id_car_type = id_car_type;
        this.brand = brand;
        this.number_seat = number_seat;
    }

    //id_model
    public get idModel(){
        return this.id_model;
    }
    //first_name
    public get wordingModel() {
        return this.wording_model;
    }
    public set wordingModel(value : string) {
        if (value != "") {
            this.wording_model = value;
        } else {
            console.log("merci de saisir une valeur pour le modèle");            
        }
    }
    //id_car_type
    public get idCarType() {
        return this.id_car_type;
    }
    public set idCarType(value : number) {
        if (value >= 0) {
            this.id_car_type = value;
        } else {
            console.log("merci de saisir une valeur pour le type de véhicule");            
        }
    }
    //brand
    public get brandName() {
        return this.brand;
    }
    public set brandName(value : string) {
        if (value != "") {
            this.brand = value;
        } else {
            console.log("merci de saisir une valeur pour la marque");            
        }
    }
    //number_seat
    public get numberSeat() {
        return this.number_seat;
    }
    public set numberSeat(value : number) {
        if (value >= 0) {
            this.number_seat = value;
        } else {
            console.log("merci de saisir une valeur pour le type de véhicule");            
        }
    }
}