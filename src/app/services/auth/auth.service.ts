import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Login } from 'src/app/interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public login : Login|null = null;

  public isAuth = false;
  public isAuthSubject = new Subject<boolean>();
  
  public emitIsAuthSubject() : void {
    return this.isAuthSubject.next(this.isAuth);
  }

  constructor() { }

  public signIn(login:Login) : boolean {
    //pour le moment pas de vérif avec la BDD
    this.isAuth = true;
    this.emitIsAuthSubject();
    //récupérer les données avec le login (nb garages...)
    //et les mettre dans le service garage
    return true;
  }

  public signOut() : void{
    this.isAuth = false;
    this.emitIsAuthSubject();
  }
}
