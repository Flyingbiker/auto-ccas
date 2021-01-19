export class Marque {
    private brand : string;
    private id_country : number;
    private link_carlogo : string;

    constructor(brand : string,
                id_country : number,
                link_carlogo : string){
        this.brand = brand;
        this.id_country = id_country;
        this.link_carlogo = link_carlogo;
    }

    //brand
    public get brandName(){
        return this.brand;
    }
    public set brandName(value : string) {
        if (value != "") {
            this.brand = value;
        } else {
            console.log("merci de saisir une valeur pour la marque");            
        }
    }

    //id_country
    public get idCountry(){
        return this.id_country;
    }
    public set idCountry(value : number) {
        if (value >= 0) {
            this.id_country = value;
        } else {
            console.log("merci de saisir une valeur pour l'id_country");            
        }
    }

    //link_carlogo
    public get linkCarLogo(){
        return this.link_carlogo;
    }
    public set linkCarLogo(value : string) {
        if (value != "") {
            this.link_carlogo = value;
        } else {
            console.log("merci de saisir une valeur pour l'id_country");            
        }
    }


}