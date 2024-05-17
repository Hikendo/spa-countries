import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Countries } from '../interfaces/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string= 'https://restcountries.com/v3.1/';
  constructor(private httClient: HttpClient) { }


  searchByAlphaCode( query:string): Observable<Countries | null>{
    const url=`${this.apiUrl}alpha/${query}`;
    //hacemos la peticion a traves de un observable el cual no se disparara hata que nos suscribimos en el componente que consume el servicio
    return this.httClient.get<Countries[]>( url )
    .pipe(
      map(countries => countries.length > 0 ? countries[0]: null),
      catchError((e) => of(null))
    );
  }

  searchCapital( query:string): Observable<Countries[]>{
    const url=`${this.apiUrl}capital/${query}`;
    //hacemos la peticion a traves de un observable el cual no se disparara hata que nos suscribimos en el componente que consume el servicio
    return this.httClient.get<Countries[]>( url )
    .pipe(
      //atrapamos el error
      catchError((e) => of([]))
    );
  }
  searchCountry( query:string): Observable<Countries[]>{
    const url=`${this.apiUrl}name/${query}`;
    //hacemos la peticion a traves de un observable el cual no se disparara hata que nos suscribimos en el componente que consume el servicio
    return this.httClient.get<Countries[]>( url )
    .pipe(
      //atrapamos el error
      catchError((e) => of([]))
    );
  }
  searchRegion( query:string): Observable<Countries[]>{
    const url=`${this.apiUrl}region/${query}`;
    //hacemos la peticion a traves de un observable el cual no se disparara hata que nos suscribimos en el componente que consume el servicio
    return this.httClient.get<Countries[]>( url )
    .pipe(
      //atrapamos el error
      catchError((e) => of([]))
    );
  }

}
