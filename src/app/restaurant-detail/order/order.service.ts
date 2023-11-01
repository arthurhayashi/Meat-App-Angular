import { Injectable } from "@angular/core";
import { ShoopingCartService } from "../shopping-cart/shopping-cart.service";
import { CardItem } from "../shopping-cart/cart-item.model";

@Injectable()
export class OrderService{
    constructor(private cartService: ShoopingCartService){

    }

    itemsValue(): number{
        return this.cartService.total()
    }

    cartItems():CardItem[]{
        return this.cartService.items
    }

    increaseQty(item:CardItem){
        this.cartService.increaseQty(item)
    }

    decreaseQty(item:CardItem){
        this.cartService.decreaseQty(item)
    }

    remove(item:CardItem){
        this.cartService.removeItem(item)
    }
}