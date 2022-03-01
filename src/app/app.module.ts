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
import { SmallCardsComponent } from './storefront/smallcards/smallcards.component';
import { HomeCardsComponent } from './storefront/homecards.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http'

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
    AccessoriesPageComponent,
    SmallCardsComponent,
    HomeCardsComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
