import { MatCardModule } from '@angular/material/card';
import { GarageService } from './services/garage/garage.service';
import { UserService } from './services/user/user.service';
import { AnnonceService } from './services/annonce/annonce.service';
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
import { MainViewComponent } from './views/main-view/main-view.component';
import { CookiesViewComponent } from './views/cookies-view/cookies-view.component';
import { MapWebSiteViewComponent } from './views/map-web-site-view/map-web-site-view.component';
import { PurchaseGuideViewComponent } from './views/purchase-guide-view/purchase-guide-view.component';
import { ContactUsViewComponent } from './views/contact-us-view/contact-us-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FourOFourPageComponent } from './views/four-o-four-page/four-o-four-page.component';
import { SocialNetworksComponent } from './views/social-networks/social-networks.component';
import { HttpClientModule } from '@angular/common/http';


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
    MainViewComponent,
    CookiesViewComponent,
    MapWebSiteViewComponent,
    PurchaseGuideViewComponent,
    ContactUsViewComponent,
    FourOFourPageComponent,
    SocialNetworksComponent,  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule,    
    MatCardModule,
    HttpClientModule     
  ],
  providers: [
    NgbCarouselConfig,  // add NgbCarouselConfig to the component providers
    UserService,
    GarageService,
    AnnonceService
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
