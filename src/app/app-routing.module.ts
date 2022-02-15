import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageLayoutComponent } from './storefront/homepagelayout.component';
import { BestSellersComponent } from './storefront/bestsellers.component';

const routes: Routes = [
  {path: '', component: HomePageLayoutComponent},
  {path: 'Home-Page', component: HomePageLayoutComponent},
  {path: 'best-sellers', component: BestSellersComponent}
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