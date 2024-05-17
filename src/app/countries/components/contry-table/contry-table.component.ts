import { Component, Input } from '@angular/core';
import { Countries } from '../../interfaces/countries';

@Component({
  selector: 'contry-table',
  templateUrl: './contry-table.component.html',
  styleUrl: './contry-table.component.css'
})
export class ContryTableComponent {

  @Input()
  public countries: Countries[]=[];
}
