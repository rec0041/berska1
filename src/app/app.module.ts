import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar.component';

import { AppComponent } from './app.component';
import { SideNavBarComponent } from './sidenavbar/sidenavbar.component';
import { BSCarouselComponent } from './bscarousel/bscarousel.component';
import { FooterComponent } from './footer/footer.component';
import { VerticalCardComponent } from './verticalcard/verticalcard.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageLayoutComponent } from './storefront/homepagelayout.component';
import { BestSellersComponent } from './storefront/bestsellers.component';
import { ShoesComponent } from './storefront/shoes/shoes.component';
import { ShoesPageComponent } from './storefront/shoes/shoespage.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SideNavBarComponent,
    BSCarouselComponent,
    FooterComponent,
    VerticalCardComponent,
    HomePageLayoutComponent,
    BestSellersComponent,
    ShoesComponent,
    ShoesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
