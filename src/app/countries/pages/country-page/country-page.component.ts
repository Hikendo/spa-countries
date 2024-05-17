import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Countries } from '../../interfaces/countries';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit{

  public country? : Countries;
  public isLoading:boolean=true;

  constructor(private activatedRoute: ActivatedRoute,
    private countriesService:CountriesService,
    private router: Router
  ){

  }
  ngOnInit(): void {
      this.activatedRoute.params
      .pipe(
        switchMap(({id})=> this.countriesService.searchByAlphaCode(id))
      )
      .subscribe(
        (countryArray)=>
           {
              if(!countryArray){
                return this.router.navigateByUrl('by-country')
              }
              return this.country= countryArray;
          });
          this.isLoading=false;

  }
  searchCountry( code: string){
    this.countriesService.searchByAlphaCode(code)
        .subscribe(country => console.log(country))
  }
}
