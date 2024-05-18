import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Countries } from '../interfaces/countries';
import { CacheStorage } from '../interfaces/cache-storage';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string= 'https://restcountries.com/v3.1/';

  //un almacenador de cache
  public cacheStore: CacheStorage={
      byCapital:    {term:'',countries:[]},
      byCountry:  {term:'',countries:[]},
      byRegion:    {term:'',countries:[]}
  }

  constructor(private httClient: HttpClient) {
    //se construye solo una vez
    this.fromLocalStorage()
  }

  private saveToLocalStorage():void{
      localStorage.setItem('cacheStorage', JSON.stringify(this.cacheStore))
  }
  private fromLocalStorage():void{
    if(!localStorage.getItem('cacheStorage')) return;
    this.cacheStore=JSON.parse(localStorage.getItem('cacheStorage')!)

  }

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
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries=> this.cacheStore.byCapital= {'term':query,countries}),
      tap(()=> this.saveToLocalStorage())
    );
  }
  searchCountry( query:string): Observable<Countries[]>{
    const url=`${this.apiUrl}name/${query}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries=> this.cacheStore.byCountry= {'term':query,countries}),
      tap(()=> this.saveToLocalStorage())
    );
  }
  searchRegion( query:string): Observable<Countries[]>{
    const url=`${this.apiUrl}region/${query}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries=> this.cacheStore.byRegion= {'term':query,countries}),
      tap(()=> this.saveToLocalStorage())
    );
  }



}
