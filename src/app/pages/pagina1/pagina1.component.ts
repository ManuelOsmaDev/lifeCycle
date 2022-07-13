import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss'],
})
export class Pagina1Component
implements OnInit, DoCheck, AfterContentInit,AfterContentChecked,
                AfterViewInit,AfterViewChecked, OnDestroy, OnChanges      {

  nombre:string = 'Manuel';
  segundos:number = 0;
  timerSubscription!:Subscription;
  constructor() {
    console.log('contructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChanges")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }
  ngOnDestroy(): void {
    console.log("limpiado")
    this.timerSubscription.unsubscribe();
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngOnInit(): void {
   this.timerSubscription = interval(1000).subscribe(i=>{
     this.segundos = i
    })
  }
  guardar(){

  }

}
