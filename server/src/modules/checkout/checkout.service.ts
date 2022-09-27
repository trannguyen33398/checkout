
import { Injectable } from '@nestjs/common';
import { item } from 'src/interface';
import  CheckoutModule  from './checkout';
@Injectable()
export class CheckoutService {
    async sum(items: Array<item>, customerType: number) {
        const co = new CheckoutModule(customerType)
        items.forEach(item=> co.add(item))
        const result = co.total()
        return result
    }
}
