import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { OrderComponent } from "./order.component";
import { Observable } from "rxjs";

export class LeaveOrderGuard implements CanDeactivate<OrderComponent>{
    canDeactivate(orderComponent: OrderComponent, activatedRoute: ActivatedRouteSnapshot,
         RouterStateSnapshot: RouterStateSnapshot): boolean{
        
        if(!orderComponent.isOrderCompleted()){
           return window.confirm('Deseja desistir da compra ?')
        }else{
            return true
        }
    }

}