import { CountryPageComponent } from './pages/country-page/country-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitaPageComponent } from './pages/by-capita-page/by-capita-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';

const routes:Routes=[
  {
      path: 'by-capital',
      component: ByCapitaPageComponent
  },
  {
    path: 'by-country',
    component: ByCountryPageComponent
  },
  {
    path: 'by-region',
    component: ByRegionPageComponent
  },
  {
    path: 'by/:id',
    component: CountryPageComponent
  },
  {
    path:'**',
    redirectTo: 'by-capital'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class CountriesRoutingModule { }
