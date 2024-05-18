import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debauncerSuscribe?: Subscription;

  private debouncer: Subject<string>= new Subject<string>();

@Input()
public placeholder:string='';
@Input()
public initialValue:string='';

@Output() onValue = new EventEmitter <string>();

@Output() onDebounce = new EventEmitter <string>();


ngOnInit(): void {
  this.debauncerSuscribe=this.debouncer
  .pipe(
    debounceTime(500)
  )
  .subscribe(value=>
    this.onDebounce.emit(value)
  )
}


ngOnDestroy(): void {
    this.debauncerSuscribe?.unsubscribe();
}

emmitSearch(value:string):void{
  this.onValue.emit(value);
}

onKeyPress(searchTerm:string){
  this.debouncer.next(searchTerm);
}



}
