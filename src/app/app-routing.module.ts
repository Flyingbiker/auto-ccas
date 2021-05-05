import { SocialNetworksComponent } from './views/social-networks/social-networks.component';
import { FourOFourPageComponent } from './views/four-o-four-page/four-o-four-page.component';
import { ContactUsViewComponent } from './views/contact-us-view/contact-us-view.component';
import { PurchaseGuideViewComponent } from './views/purchase-guide-view/purchase-guide-view.component';
import { MapWebSiteViewComponent } from './views/map-web-site-view/map-web-site-view.component';
import { CookiesViewComponent } from './views/cookies-view/cookies-view.component';
import { CgvViewComponent } from './views/cgv-view/cgv-view.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarDetailsViewComponent } from './views/car-details-view/car-details-view.component';


const routes: Routes = [
  {path:'cars', component : MainViewComponent},
  {path:'guide_achat', component : PurchaseGuideViewComponent},
  {path:'contact', component : ContactUsViewComponent},
  {path:'cgv', component : CgvViewComponent},
  {path:'cookies', component : CookiesViewComponent},
  {path:'mapWebSite', component : MapWebSiteViewComponent},  
  {path:'social-networks', component : SocialNetworksComponent},  
  {path:'car-details', component : CarDetailsViewComponent},  
  {path:'', component : MainViewComponent},
  {path:'404-page', component : FourOFourPageComponent},
  {path:'**', redirectTo : '404-page'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
