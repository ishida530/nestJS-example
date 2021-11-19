import { Item } from 'src/interface/Item';
import { ShopService } from 'src/shop/shop.service';
export declare class BasketService {
    private shopService;
    constructor(shopService: ShopService);
    basket: any[];
    getBasket(): Item[];
    saveBasket(name: {
        name: string;
        count: number;
    }): {
        isSucces: boolean;
        index: number;
        errorType?: undefined;
    } | {
        isSucces: boolean;
        index?: undefined;
        errorType?: undefined;
    } | {
        isSucces: boolean;
        errorType: string;
        index?: undefined;
    };
    deletItemFromBasket(index: number): any[];
}
