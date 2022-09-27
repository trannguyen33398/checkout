import { cakeType } from "../constants/cakeType"
import { cakePrice } from "../constants/price"

export interface item {
    cakeType: cakeType,
    amount: number
}

export interface discount {
    type: number,
    cakeType: cakeType,
    discount: number | { buy: number, get: number },
    price: cakePrice
}