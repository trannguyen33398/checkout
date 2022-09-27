import { customerType } from "../../constants/customerType";
import { discountType } from "../../constants/discount";
import { item ,discount} from "../../interface";
import { cakeType } from '../../constants/cakeType';
import { cakePrice } from '../../constants/price';
export default class CheckoutModule {
    private customerType: number
    private items: Array<item>
    private sum: number
    constructor(customerType: number) {
        this.customerType = customerType;
        this.items = [];
        this.sum = 0;
    }
    public add(newItem: item) {
        if (this.items.some((el: item) => el.cakeType == newItem.cakeType)) {
            this.items.map((item: item) => item.cakeType == newItem.cakeType ? { type: item.cakeType, amount: item.amount += newItem.amount } : item)
        }
        this.items.push(newItem)
    }
    public total() {
        let discount: discount = {
            type: 0,
            cakeType: 0,
            discount: 0,
            price: 0
        }

        if (this.customerType === customerType.AMAZONE) {
            discount = discountType.Amazon
        } else if (this.customerType === customerType.FACEBOOK) {
            discount = discountType.Facebook
        } else if (this.customerType === customerType.MICROSOFT) {
            discount = discountType.Microsoft
        }

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].cakeType === discount.cakeType) {
                if (discount.type === 1) {
                    const calcPrice = (Math.floor(this.items[i].amount / Object(discount.discount)["get"]) * Object(discount.discount)["buy"] + this.items[i].amount % Object(discount.discount)["get"]) * discount.price;
                    this.sum += calcPrice
                } else {
                    const calcPrice = Number(discount.discount) * this.items[i].amount;
                    this.sum += calcPrice
                }
            } else {
                if (this.items[i].cakeType === cakeType.LARGE_PIZZA) {
                    this.sum += cakePrice.LARGE_PIZZA * this.items[i].amount;
                }
                if (this.items[i].cakeType === cakeType.MEDIUM_PIZZA) {
                    this.sum += cakePrice.MEDIUM_PIZZA * this.items[i].amount;
                }
                if (this.items[i].cakeType === cakeType.SMALL_PIZZA) {
                    this.sum += cakePrice.SMALL_PIZZA * this.items[i].amount;
                }
            }
        }
        return this.sum;

    }
}