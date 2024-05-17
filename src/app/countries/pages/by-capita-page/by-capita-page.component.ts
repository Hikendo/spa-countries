import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Countries } from '../../interfaces/countries';

@Component({
  selector: 'app-by-capita-page',
  templateUrl: './by-capita-page.component.html',
  styleUrl: './by-capita-page.component.css'
})
export class ByCapitaPageComponent {

  public countries:Countries[]=[];
  public isLoading:boolean=true;

  constructor(private countriesService:CountriesService){

  }
  searchByCapital(value:string):void{
    this.countriesService.searchCapital(value)
    .subscribe(
      countries => {
        this.countries= countries;
        this.isLoading=false;
      }
    );
    //alert('capital '+value);
  }
}
