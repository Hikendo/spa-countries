import { Component } from '@angular/core';
import { Countries } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {
  public countries:Countries[]=[];
  constructor(private countriesService:CountriesService){

  }
  searchByCountry(value:string):void{
    this.countriesService.searchCountry(value)
    .subscribe(
      countries => {
        this.countries= countries;
      }
    );
    //alert('capital '+value);
  }

}
