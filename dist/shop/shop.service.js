"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopService = void 0;
const common_1 = require("@nestjs/common");
const Item_1 = require("../interface/Item");
let ShopService = class ShopService {
    getItems() {
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
        ];
    }
    checkSameItem(basket, newItem) {
        let isSame = false;
        basket.filter(item => {
            item.name === newItem.name ? isSame = true : null;
        });
        console.log('jesli jest true to element istnieje', isSame);
        if (isSame)
            return true;
        else
            false;
    }
};
ShopService = __decorate([
    (0, common_1.Injectable)()
], ShopService);
exports.ShopService = ShopService;
//# sourceMappingURL=shop.service.js.map