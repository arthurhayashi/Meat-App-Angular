import { Injectable } from "@angular/core";
import { ShoopingCartService } from "../shopping-cart/shopping-cart.service";
import { CardItem } from "../shopping-cart/cart-item.model";
import { Order,OrderItem } from "./order.model";
import { Observable } from "rxjs";
import { Http,Headers,RequestOptions  } from "@angular/http";
import { MEAT_API } from "app/app.api";

@Injectable()
export class OrderService{
    constructor(private cartService: ShoopingCartService, private http:Http){

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

    checkOrder(order: Order): Observable<string>{
        const headers =new Headers()
        headers.append('Content-Type','application/json')
        return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({headers:headers})).map(response=> response.json()).map(order=>order.id)
    }

    clear(){
        this.cartService.clear()
    }
}