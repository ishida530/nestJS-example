import { Item } from 'src/interface/Item';
export declare class ShopService {
    getItems(): Item[];
    checkSameItem(basket: Item[], newItem: Item): boolean;
}
