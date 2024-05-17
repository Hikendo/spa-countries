import { Component } from '@angular/core';
import { Countries } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {
  public countries:Countries[]=[];
  public isLoading:boolean=true;

  constructor(private countriesService:CountriesService){

  }
  searchByRegion(value:string):void{
    this.countriesService.searchRegion(value)
    .subscribe(
      countries => {
        this.countries= countries;
        this.isLoading=false;
      }
    );
    //alert('capital '+value);
  }
}
