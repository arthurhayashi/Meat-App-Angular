import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CardItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CardItem[]

  @Output() increaseQty = new EventEmitter<CardItem>()
  @Output() decreaseQty = new EventEmitter<CardItem>()
  @Output() remove = new EventEmitter<CardItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item:CardItem){
    this.increaseQty.emit(item)
  }
  emitDecreaseQty(item:CardItem){
    this.decreaseQty.emit(item)
  }
  emitRemove(item:CardItem){
    this.remove.emit(item)
  }
}
