import { Component, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit{
  public countries:Countries[]=[];
  public isLoading:boolean=true;
  public initialValue: string='';

  constructor(private countriesService:CountriesService){

  }
  ngOnInit(): void {
    this.countries= this.countriesService.cacheStore.byCountry.countries;
    this.initialValue= this.countriesService.cacheStore.byCountry.term;

  }
  searchByCountry(value:string):void{
    this.countriesService.searchCountry(value)
    .subscribe(
      countries => {
        this.countries= countries;
        this.isLoading=false;
      }
    );
    //alert('capital '+value);
  }

}
