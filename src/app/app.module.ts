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
import { CollabComponent } from './storefront/collab/collab.component';
import { CollabPageComponent } from './storefront/collab/collabpage.component';
import { NewComponent } from './storefront/New/new.component';
import { NewPageComponent } from './storefront/New/newpage.component';
import { AccessoriesComponent } from './storefront/accessories/accessories.component';
import { AccessoriesPageComponent } from './storefront/accessories/accessoriespage.component';

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
    ShoesPageComponent,
    CollabComponent,
    CollabPageComponent,
    NewComponent,
    NewPageComponent,
    AccessoriesComponent,
    AccessoriesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
