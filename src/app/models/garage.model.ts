export class Garage {
    private id_garage : number;
    private name : string;
    private phone : string;
    private date_creation_garage : Date;
    private street_number : number;
    private street : string;
    private city : string;
    private num_dep : string;

    constructor(id_garage : number,
                name : string,
                phone : string,                
                street_number : number,
                street : string,
                city : string,
                num_dep : string){
        this.id_garage = id_garage;
        this.name = name;
        this.phone = phone;
        this.date_creation_garage = new Date();
        this.street_number = street_number;
        this.street = street;
        this.city = city;
        this.num_dep = num_dep;
    }

    // id_garage
    public get idUser() {
        return this.id_garage;
    }

    //name
    public get nameGarage(){
        return this.name;
    }
    public set nameGarage(value : string){
        if (value != "") {
            this.name = value;
        } else {
            console.log("merci de saisir une valeur pour le nom du garage");            
        }
    }
    //phone
    public get phoneGarage(){
        return this.phone;
    }
    public set phoneGarage(value : string){
        if (value != "") {
            this.phone = value;
        } else {
            console.log("merci de saisir une valeur pour le téléphone");            
        }
    }
    //date_creation_garage
    public get dateCreationGarage(){
        return this.date_creation_garage;
    }
    //street_number
    public get streetNumberGarage(){
        return this.street_number;
    }
    public set streetNumberGarage(value : number){
        if (value >= 0) {
            this.street_number = value;
        } else {
            console.log("merci de saisir une valeur pour le numéro de rue");            
        }
    }

    /**
     * getStreet
     * return this.street;
     */
    public get streetGarage(){
        return this.street;
    }        
    /**
     * setStreet
     * value : string  
     * return : string   
     * */
    public set streetGarage(value : string) {
        if (value != "") {
            this.street = value;
        } else {
            console.log("merci de saisir une valeur pour la rue");            
        }
    }

    /**
     * * getCity
     * return this.city 
     */
    public get cityGarage() {
        return this.city        
    }
    /**
     * setCity
     * value : string  
     * return : string   
     * */
    public set cityGarage(value : string) {
        if (value != "") {
            this.city = value;
        } else {
            console.log("merci de saisir une valeur pour la ville");            
        }
    }

    /**
     * * getNumDep
     * return this.city 
     */
    public get numDepGarage() {
        return this.num_dep        
    }
    /**
     * setCity
     * value : string  
     * return : string   
     * */
    public set numDepGarage(value : string) {
        if (value != "") {
            this.num_dep = value;
        } else {
            console.log("merci de saisir une valeur pour le numéro de département");            
        }
    }    
}