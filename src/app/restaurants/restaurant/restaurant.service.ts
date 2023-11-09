import { Injectable } from "@angular/core";


import { Restaurant } from "./restaurant.model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import { ErrorHandler } from "app/app.error-handler";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class RestaurantService{
    constructor(private http:HttpClient){}

    restuaurants(search?: string): Observable<Restaurant[]> {
        let params : HttpParams = undefined
        if(search){
            params=new HttpParams().append('q',search)
        }
        return this.http.get(`${MEAT_API}/restaurants`, {params: params}).catch(ErrorHandler.handleError);
    }

    restaurantById(id:string):Observable<Restaurant>{
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
    }

    reviewsOfRestaurant(id:string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    }

    menuOfRestaurant(id:string): Observable<MenuItem[]>{
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
    }
}