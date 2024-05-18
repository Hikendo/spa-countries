import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Countries } from '../../interfaces/countries';

@Component({
  selector: 'app-by-capita-page',
  templateUrl: './by-capita-page.component.html',
  styleUrl: './by-capita-page.component.css'
})
export class ByCapitaPageComponent implements OnInit {

  public countries:Countries[]=[];
  public isLoading:boolean=true;
  public initialValue: string='';

  constructor(private countriesService:CountriesService){

  }
  ngOnInit(): void {
      this.countries= this.countriesService.cacheStore.byCapital.countries;
      this.initialValue= this.countriesService.cacheStore.byCapital.term;

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
