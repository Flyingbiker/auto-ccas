import { GarageService } from './services/garage/garage.service';
import { UserService } from './services/user/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CgvViewComponent } from './views/cgv-view/cgv-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardsViewComponent } from './views/cards-view/cards-view.component';
import { ReassuranceComponent } from './components/reassurance/reassurance.component';
import { CardCarComponent } from './components/card-car/card-car.component';
import { UsersViewComponent } from './views/users-view/users-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CgvViewComponent,
    CarouselComponent,
    SearchBarComponent,
    CardsViewComponent,
    ReassuranceComponent,
    CardCarComponent,
    UsersViewComponent,  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule, 
  ],
  providers: [
    NgbCarouselConfig,  // add NgbCarouselConfig to the component providers
    UserService,
    GarageService,
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
