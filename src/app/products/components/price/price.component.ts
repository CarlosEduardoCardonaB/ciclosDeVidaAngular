import { Component, Input, input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css',
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{

  @Input()
  public price:number = 0;

  public interval$?: Subscription;


  ngOnInit(): void {
    console.log('Componente HIJO - ngOnInit');

    //Este interval de rxjs emite valores cada intervalo de tiempo que le asignemos, en este ejemplo emite cada 1 segundo = 1000 ms
    this.interval$ = interval(1000).subscribe( value => console.log(`Tick: ${value}`));


  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes});
    console.log('Componente HIJO - ngOnChanges');
  }
  ngOnDestroy(): void {

    console.log('Componente HIJO - ngOnDestroy');
    //Este unsuscribe me cancela la subscripción del método ngOnInit que se hizo con el interval
    this.interval$?.unsubscribe();
  }


 }
