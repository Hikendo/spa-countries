import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Countries } from '../interfaces/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string= 'https://restcountries.com/v3.1/';
  constructor(private httClient: HttpClient) { }

  private getCountriesRequest(url:string):Observable<Countries[]>{
    return this.httClient.get<Countries[]>(url)
    .pipe(
      catchError((e) => of([]))
    );
  }

  searchByAlphaCode( query:string): Observable<Countries | null>{
    const url=`${this.apiUrl}alpha/${query}`;
    //hacemos la peticion a traves de un observable el cual no se disparara hata que nos suscribimos en el componente que consume el servicio
    return this.httClient.get<Countries[]>( url )
    .pipe(
      map(countries => countries.length > 0 ? countries[0]: null),
      catchError((e) => of(null)),
      //delay(2000)
    );
  }

  searchCapital( query:string): Observable<Countries[]>{
    const url=`${this.apiUrl}capital/${query}`;
    return this.getCountriesRequest(url);
  }
  searchCountry( query:string): Observable<Countries[]>{
    const url=`${this.apiUrl}name/${query}`;
    return this.getCountriesRequest(url);
  }
  searchRegion( query:string): Observable<Countries[]>{
    const url=`${this.apiUrl}region/${query}`;
    return this.getCountriesRequest(url);
  }

}
