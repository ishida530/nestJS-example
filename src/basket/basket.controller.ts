import { Body, Controller, Delete, Get, Inject, Param, Post } from '@nestjs/common';
import { BasketService } from './basket.service';
import { Item } from 'src/interface/Item';

@Controller('basket')
export class BasketController {

    constructor(
        @Inject(BasketService) private basketService:BasketService

    ){}
        @Get()
        getBasket():Item[]{
            return this.basketService.getBasket()
        }
        @Post()
        saveBasket(
            @Body() {name:string, count:number}
        ){
            return this.basketService.saveBasket({name:string, count:number})
        }
        @Delete(`/:index`)
        deletItemFromBasket(
            @Param('index') index:number 
        ){
             return this.basketService.deletItemFromBasket(index)
        }
}
