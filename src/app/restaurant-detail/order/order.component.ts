import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CardItem } from '../shopping-cart/cart-item.model';
import { Order,OrderItem } from './order.model';
import { Router } from '@angular/router';


@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery:number = 8

  paymentOptions: RadioOption[] =[
    {label:'Dinheiro', value:'MON'},
    {label:'Cartão de Débito', value:'DEB'},
    {label:'Cartão Refeição', value:'REF'}
  ]

  constructor(private orderService: OrderService, private router:Router) { }

  ngOnInit() {
  }

  itemsValue():number {
    return this.orderService.itemsValue()
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

  checkOrder(order:Order){
    order.orderItems= this.cartItems().map((item:CardItem)=> new OrderItem(item.quantity,item.menuItem.id))
    this.orderService.checkOrder(order).subscribe((orderId:string)=>{
      this.router.navigate(['/order-summary'])
      this.orderService.clear()
    })
    console.log(order)
  }
}
