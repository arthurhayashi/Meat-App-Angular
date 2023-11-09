import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Restaurant } from "./restaurant.model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import { ErrorHandler } from "app/app.error-handler";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantService{
    constructor(private http:Http){}

    restuaurants(search?: string): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`, {params: {q: search}}).map(res => res.json()).catch(ErrorHandler.handleError);
    }

    restaurantById(id:string):Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`).map(res => res.json()).catch(ErrorHandler.handleError);
    }

    reviewsOfRestaurant(id:string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`).map(res => res.json()).catch(ErrorHandler.handleError);
    }

    menuOfRestaurant(id:string): Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`).map(res => res.json()).catch(ErrorHandler.handleError);
    }
}