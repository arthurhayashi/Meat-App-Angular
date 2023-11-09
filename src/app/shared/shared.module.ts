import { NgModule,ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShoopingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantService } from "app/restaurants/restaurant/restaurant.service";
import { OrderService } from "app/restaurant-detail/order/order.service";
import { SnackbarComponent } from "./messages/snackbar/snackbar.component";
import { NotificationService } from "./messages/notification.service";


@NgModule({
    declarations:[InputComponent,RadioComponent,RatingComponent, SnackbarComponent],
    imports:[CommonModule,FormsModule,ReactiveFormsModule],
    exports:[InputComponent,RadioComponent,RatingComponent,
        CommonModule,FormsModule,ReactiveFormsModule,SnackbarComponent],
})

export class SharedModule{
    static forRoot():ModuleWithProviders{
        return{
            ngModule: SharedModule,
            providers:[ShoopingCartService,RestaurantService,OrderService, NotificationService]

        }
    }
}