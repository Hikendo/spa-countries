import { Countries } from "./countries";

export interface CacheStorage {
  byCapital: TermCountries,
  byCountry: TermCountries,
  byRegion: TermCountries
}
export interface TermCountries{
  term:string,
  countries: Countries[]
}
