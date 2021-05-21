import { User } from './../../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public arrayJson : Array<any>;
  public usersArray : Array<User> = [];
  public userConnected : User | null = null ;

  constructor(private httpClient : HttpClient) {  
    this.arrayJson= [
      {"id_user":1,"first_name":"Martin","last_name":"LODEVIE","email":"lodevie@gmail.com","password":"lodevie","phone":"0123456789","siret":"36252187900034","id_role":3,"date_creation_user":"2020-12-18 10:01:48"},
      {"id_user":2,"first_name":"admin","last_name":"admin","email":"admin@gmail.com","password":"admin","phone":"0123456789","siret":"admin","id_role":1,"date_creation_user":"2020-12-18 10:05:09"},
      {"id_user":3,"first_name":"Pierre","last_name":"Giraud","email":"giraud@gmail.com","password":"giraud","phone":"0610203040","siret":"46252187900035","id_role":2,"date_creation_user":"2020-12-18 10:12:10"},
      {"id_user":4,"first_name":"Leo","last_name":"Joly","email":"joly@gmail.com","password":"joly","phone":"0650607080","siret":"57252187900025","id_role":2,"date_creation_user":"2020-12-18 10:12:10"},
      {"id_user":5,"first_name":"Trois","last_name":"Riviere","email":"riviere@gmail.com","password":"riviere","phone":"0790607080","siret":"68252187900025","id_role":2,"date_creation_user":"2020-12-18 10:12:10"},
      {"id_user":6,"first_name":"Hervé","last_name":"Renard","email":"renard@gmail.com","password":"renard","phone":"0750607080","siret":"68252187900099","id_role":2,"date_creation_user":"2020-12-18 10:12:10"},
      {"id_user":7,"first_name":"Suregelé","last_name":"Picard","email":"picard@gmail.com","password":"picard","phone":"0710307080","siret":"99252187900025","id_role":2,"date_creation_user":"2020-12-18 10:12:10"},
      {"id_user":8,"first_name":"Fibre","last_name":"Fabre","email":"fabre@gmail.com","password":"fabre","phone":"0850607080","siret":"11252187900025","id_role":2,"date_creation_user":"2020-12-18 10:12:10"},
      {"id_user":9,"first_name":"cresus","last_name":"Richissime","email":"richissime@gmail.com","password":"richissime","phone":"0999999999","siret":"99999999999999","id_role":2,"date_creation_user":"2020-12-18 13:59:52"},
      {"id_user":10,"first_name":"donald","last_name":"le Canard","email":"duck@gmail.com","password":"duck","phone":"0124585909","siret":"12435789514785","id_role":2,"date_creation_user":"2020-12-18 14:05:33"}
      ];

      this.arrayJson.forEach(element => {        
        this.usersArray.push(new User(element.first_name, element.last_name, 
          element.email, element.password, element.phone, element.siret,
          element.id_role))
      });
    
  }

  public getAllUsers() : void {
     this.httpClient.get<Array<User>>('http://localhost/formation-dwwm/PHP/BackOffice_BC/index.php?controller=allUsers')
      .subscribe(
        (response) =>{
          return this.usersArray = response;
        },
        (error) => {
          console.error('Erreur lors de la requête Get pour récupérer les Users ' + error);
        }
      );
  }

  public getUserById(id : number) : void {
      this.httpClient.get<User>('http://formation-dwwm/Symfony/API_buisness_case/public/index.php/api/admin/pros/'+id)
        .subscribe(
          (response) => {
            this.userConnected = response;
          },
          (err) => { console.error(err);
          }
        );
    //API key "ROLE_USER", "ROLE_PRO" 07f32d41d5205b0ce26898518a2afae48c5af31bafc27252a46cf8b5b806e294
  }
  
}
