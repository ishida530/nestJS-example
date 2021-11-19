import { Inject, Injectable } from '@nestjs/common';
import { Item } from 'src/interface/Item';
import { ShopService } from 'src/shop/shop.service';

@Injectable()
export class BasketService {
    constructor(
        @Inject(ShopService) private shopService: ShopService
    ) { }
    basket = []

    getBasket(): Item[] {
        return this.basket
    }
    saveBasket(
        name: { name: string, count: number }
    ) {
        const newItem: Item = {
            name: name.name,
            description: 'testowy test',
            price: 123,
        }

        name.count = Number(name.count)
        if (!this.shopService.checkSameItem(this.basket, newItem)) {
            if (typeof name.name === "string" && typeof name.count === "number" && 0 < name.count && newItem.name.length > 1) {
                this.basket = [...this.basket, newItem]
                const count = this.getBasket().length
                console.log('twoj koszyk to:', this.basket)
                return {
                    isSucces: true,
                    index: count
                }
            } else
                return {
                    isSucces: false,
                }
        } else return {
            isSucces: false,
            errorType: 'element juz istnieje'
        }
    }
    deletItemFromBasket(
        index: number
    ) {
        console.log('index', index)
        console.log('koszyk przed usunieciem', this.basket)

        this.basket.splice(index, 1);
        console.log('koszyk po usunieciu', this.basket)
        return this.basket

    }
}
