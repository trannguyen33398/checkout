export interface item {
    cakeType: cakeType,
    amount: number
}
export  enum cakeType  {
    SMALL_PIZZA = 1,
    MEDIUM_PIZZA = 2,
    LARGE_PIZZA = 3
 }

 export  enum customerType  {
    DEFAULT = 10001,
    FACEBOOK = 10002,
    MICROSOFT = 10003,
    AMAZON = 10004
 }