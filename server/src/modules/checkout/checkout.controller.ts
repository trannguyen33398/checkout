import { CheckoutService } from './checkout.service';
import { Body, Controller, HttpException, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { item } from '../../interface';
import { customerType } from '../../constants/customerType';
import Error from '../../constants/error';
@Controller('checkout')
export class CheckoutController {
    constructor(private checkoutService: CheckoutService) { }
    @Post('calc')
    async check(@Body() body: any) {
        const items: Array<item> = body.items as Array<item>
        const customer: number = body.customer as number
        if (!Object.values(customerType).includes(customer) || Number.isNaN(Number(customer))) {
            throw new HttpException({ error: Error.INVALID_CUSTOMER }, HttpStatus.BAD_REQUEST);
        }
        if (!items || !Array.isArray(items)) {
            throw new HttpException({ error: Error.INVALID_ITEMS }, HttpStatus.BAD_REQUEST);
        }
        
        const sum = this.checkoutService.sum(items, customer)
        return sum
    }
}
