export class User {
    private id_user : number;    
    public first_name: string;
    public last_name: string;
    public email:string;
    public password:string;
    public phone: string;
    public siret: string;
    public id_role: number;
    private date_creation_user: string;

    constructor(first_name: string, 
                last_name: string,
                email:string,
                password:string,
                phone: string,
                siret: string,
                id_role: number){
        this.first_name=first_name;
        this.last_name=last_name;
        this.email=email;
        this.password=password;
        this.phone=phone;
        this.siret=siret;
        this.id_role=id_role;
        this.date_creation_user = new Date().toString();
    }

    //id_user
    public get idUser(){
        return this.id_user
    }
    //first_name
    public get firstNameUser() {
        return this.first_name;
    }
    public set firstNameUser(value : string) {
        if (value != "") {
            this.first_name = value;
        } else {
            console.log("merci de saisir une valeur pour le prénom");            
        }
    }
    //last_name
    public get lastNameUser() {
        return this.last_name;
    }
    public set lastNameUser(value : string) {
        if (value != "") {
            this.last_name = value;
        } else {
            console.log("merci de saisir une valeur pour le nom");            
        }
    }
    //email
    public get emailUser() {
        return this.email;
    }
    public set emailUser(value : string) {
        if (value != "") {
            this.email = value;
        } else {
            console.log("merci de saisir une valeur pour l'email'");            
        }
    }
    //siret
    public get siretUser() {
        return this.siret;
    }
    public set siretUser(value : string) {
        if (value != "") {
            this.siret = value;
        } else {
            console.log("merci de saisir une valeur pour le Siret");            
        }
    }
    //id_role
    public get idRole() {
        return this.id_role;
    }
    public set idRole(value : number) {
        if (value >= 0) {
            this.id_role = value;
        } else {
            console.log("merci de saisir une valeur" +
            "positive pour le role de l'utilisateur");            
        }
    }
    //date_creation_user
    public get dateCreationUser() {
        return this.date_creation_user;
    }
}