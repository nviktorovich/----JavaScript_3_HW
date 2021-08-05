"use strict"

for (let i = 0; i < 10; i += test(i)){
}

function test(num) {
    console.log(num)
    return 1
}