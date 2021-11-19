import { BasketService } from './basket.service';
import { Item } from 'src/interface/Item';
export declare class BasketController {
    private basketService;
    constructor(basketService: BasketService);
    getBasket(): Item[];
    saveBasket({ name: string, count: number }: {
        name: any;
        count: any;
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
