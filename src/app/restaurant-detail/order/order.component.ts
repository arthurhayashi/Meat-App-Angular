import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CardItem } from '../shopping-cart/cart-item.model';


@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] =[
    {label:'Dinheiro', value:'MON'},
    {label:'Cartão de Débito', value:'DEB'},
    {label:'Cartão Refeição', value:'REF'}
  ]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  cartItems():CardItem[]{
    return this.orderService.cartItems()
  }

  increaseQty(item: CardItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CardItem){
    this.orderService.decreaseQty(item)
  }

  remove(item: CardItem){
    this.orderService.remove(item)
  }
}
