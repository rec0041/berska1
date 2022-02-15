import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageLayoutComponent } from './storefront/homepagelayout.component';
import { BestSellersComponent } from './storefront/bestsellers.component';
import { ShoesPageComponent } from './storefront/shoes/shoespage.component';
import { CollabPageComponent } from './storefront/collab/collabpage.component';

const routes: Routes = [
  {path: '', component: HomePageLayoutComponent},
  {path: 'Home-Page', component: HomePageLayoutComponent},
  {path: 'best-sellers', component: BestSellersComponent},
  {path: 'shoes', component: ShoesPageComponent},
  {path: 'collab', component: CollabPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
