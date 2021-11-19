import { Controller, Get, Inject,Body } from '@nestjs/common';
import { Item } from 'src/interface/Item';
import { ShopService } from './shop.service';

@Controller('shop')
export class ShopController {
    constructor(@Inject(ShopService) private shopService: ShopService) {}

    @Get()
    getItems():Item[] {
         return this.shopService.getItems()
    }
}
