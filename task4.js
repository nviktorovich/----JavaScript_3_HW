"use strict"

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg", ]
    },
    {
        id: 5,
        price: 499,
        photos: [] },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    }, {
        id: 8,
        price: 78, },
];

// фильт исключает отсутствие ключа photos и пустого массива photos
let productsWithPhotos = products.filter(product => checker(product))


function checker(obj) {
    return Object.keys(obj).includes("photos") && obj.photos.length > 0;
}
console.log(productsWithPhotos)


// сортировка по возрастанию цены
products.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }
    // a должно быть равным b
    return 0;
});

console.log(products)