import { Injectable } from "@angular/core";
import { ShoopingCartService } from "../shopping-cart/shopping-cart.service";
import { CardItem } from "../shopping-cart/cart-item.model";
import { Order,OrderItem } from "./order.model";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MEAT_API } from "app/app.api";
import { LoginService } from "app/security/login/login.service";


@Injectable()
export class OrderService{
    constructor(private cartService: ShoopingCartService, private http:HttpClient){

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

        return this.http.post<Order>(`${MEAT_API}/orders`,order).map(order=>order.id)
    }

    clear(){
        this.cartService.clear()
    }
}