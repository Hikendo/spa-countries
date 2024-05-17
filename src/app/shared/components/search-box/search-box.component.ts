import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
@Input()
public placeholder:string='';
@Output() onValue = new EventEmitter <string>();
emmitSearch(value:string):void{
  this.onValue.emit(value);
}

}
