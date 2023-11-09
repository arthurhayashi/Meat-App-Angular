import { Component, OnInit } from '@angular/core';
import { ShoopingCartService } from './shopping-cart.service';
import { animate, state, style, transition, trigger, keyframes } from '@angular/animations';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  animations:[
    trigger('row',[
      state('ready',style({opacity:1})),
      transition('void => ready',animate('300ms 0s ease-in', keyframes([
        style({opacity:0, transform: 'translateX(-30px)', offset:0}),
        style({opacity:.8, transform: 'translateX(10px)', offset:.8}),
        style({opacity:1, transform: 'translateX(0px)', offset:1}),
      ]))),
      transition('ready => void',animate('300ms 0s ease-out', keyframes([
        style({opacity:1, transform: 'translateX(0px)', offset:0}),
        style({opacity:.8, transform: 'translateX(-10px)', offset:.2}),
        style({opacity:0, transform: 'translateX(30px)', offset:1}),
      ])))
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {

  rowState='ready'

  constructor(private shoppingCartService: ShoopingCartService) { }

  ngOnInit() {
  }

  items():any[] {
    return this.shoppingCartService.items;
  }

  clear() {
    this.shoppingCartService.clear()
  }

  total():number{
    return this.shoppingCartService.total()
  }

  removeItem(item:any){
    this.shoppingCartService.removeItem(item)
  }

  addItem(item:any){
    this.shoppingCartService.addItem(item)
  }
}
