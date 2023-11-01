import { MenuItem } from "../menu-item/menu-item.model"
import { CardItem } from "./cart-item.model"

export class ShoopingCartService{
    items:CardItem[] = []

    clear(){
        this.items = []
    }

    addItem(item:MenuItem){
        let foundItem = this.items.find((mItem)=>mItem.menuItem.id === item.id)
        if(foundItem){
            this.increaseQty(foundItem)
        }else{
            this.items.push(new CardItem(item));
        }
    }

    increaseQty(item:CardItem){
        item.quantity = item.quantity +1
    }

    decreaseQty(item:CardItem){
        item.quantity = item.quantity -1
        if(item.quantity==0){
            this.removeItem(item)
        }
    }

    removeItem(item:CardItem){
        this.items.splice(this.items.indexOf(item),1)
    }

    total():number{
        return this.items.map(item=>item.value()).reduce((prev,value)=> prev+value, 0)
    }
}