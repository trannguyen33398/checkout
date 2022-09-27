import { cakeType } from "./cakeType";
import { cakePrice } from "./price";
 const  AmazonDiscount = {
    type :2, 
    cakeType: cakeType.LARGE_PIZZA,
    discount: 19.99,
    price: cakePrice.LARGE_PIZZA
}

 const  FacebookDiscount = {
    type :1, 
    cakeType: cakeType.MEDIUM_PIZZA,
    discount: {buy: 4,get:5},
    price: cakePrice.MEDIUM_PIZZA
}
 const  MicrosoftDiscount = {
    type :1, 
    cakeType: cakeType.SMALL_PIZZA,
    discount: {buy: 2,get:3},
    price: cakePrice.SMALL_PIZZA
}

export const  discountType = {
    Amazon :AmazonDiscount, 
    Facebook: FacebookDiscount,
    Microsoft: MicrosoftDiscount
}