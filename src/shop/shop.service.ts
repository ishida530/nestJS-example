import { Injectable } from '@nestjs/common';
import { Item } from 'src/interface/Item';

@Injectable()
export class ShopService {

    getItems(): Item[] {
        return [
            {
                name: 'mleko',
                description: 'bardzo dobre mleko',
                price: 12
            },
            {
                name: 'baton',
                description: 'bardzo dobry baton',
                price: 33
            },
            {
                name: 'buty',
                description: 'bardzo dobre buty',
                price: 54
            }
        ]
    }
    checkSameItem(basket: Item[], newItem: Item): boolean {
        let isSame=false
        basket.filter(item=>{
           item.name===newItem.name ? isSame=true : null
        })
        console.log('jesli jest true to element istnieje',isSame)
        if(isSame)return true
        else false

     

    }
}
