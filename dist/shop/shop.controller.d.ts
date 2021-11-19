import { Item } from 'src/interface/Item';
import { ShopService } from './shop.service';
export declare class ShopController {
    private shopService;
    constructor(shopService: ShopService);
    getItems(): Item[];
}
