import { ContactUsViewComponent } from './views/contact-us-view/contact-us-view.component';
import { PurchaseGuideViewComponent } from './views/purchase-guide-view/purchase-guide-view.component';
import { MapWebSiteViewComponent } from './views/map-web-site-view/map-web-site-view.component';
import { CookiesViewComponent } from './views/cookies-view/cookies-view.component';
import { CgvViewComponent } from './views/cgv-view/cgv-view.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component : MainViewComponent},
  {path:'guide_achat', component : PurchaseGuideViewComponent},
  {path:'contact', component : ContactUsViewComponent},
  {path:'cgv', component : CgvViewComponent},
  {path:'cookies', component : CookiesViewComponent},
  {path:'mapWebSite', component : MapWebSiteViewComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
