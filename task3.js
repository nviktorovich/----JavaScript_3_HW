"use strict"

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

function makeSale(price, sale=15) {
    return price * (1 - sale * 0.01)
}

products.forEach(element => element.price = makeSale(element.price));
console.log(products)