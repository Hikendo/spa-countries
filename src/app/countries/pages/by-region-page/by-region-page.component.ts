import { Component, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';
import { Regions } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit{
  public countries:Countries[]=[];
  public isLoading:boolean=true;
public regions:Regions[]=['Africa','Americas','Asia','Europe','Oceania'];
  public selectedOption?: string;

  public initialValue: string = '';

  constructor(private countriesService:CountriesService){

  }
  ngOnInit(): void {

    this.countries= this.countriesService.cacheStore.byRegion.countries;
    this.initialValue= this.countriesService.cacheStore.byRegion.term;
    this.selectedOption=this.initialValue;

  }
  searchByRegion(value:Event):void{
    const selectElement = value.target as HTMLSelectElement;
    this.selectedOption = selectElement.value;
    this.countriesService.searchRegion(this.selectedOption)
    .subscribe(
      countries => {
        this.countries= countries;
        this.isLoading=false;
      }
    );
    //alert('capital '+value);

  }


}
