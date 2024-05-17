import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit {

  private debouncer: Subject<string>= new Subject<string>();

@Input()
public placeholder:string='';
@Output() onValue = new EventEmitter <string>();

@Output() onDebounce = new EventEmitter <string>();

ngOnInit(): void {
  this.debouncer
  .pipe(
    debounceTime(500)
  )
  .subscribe(value=>
    this.onDebounce.emit(value)
  )
}

emmitSearch(value:string):void{
  this.onValue.emit(value);
}

onKeyPress(searchTerm:string){
  this.debouncer.next(searchTerm);
}



}
