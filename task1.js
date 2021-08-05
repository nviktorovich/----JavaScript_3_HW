"use strict"

while (true) {
    let userNum = parseInt(prompt("введите число"))
    if (userNum == 0) {
        console.log("это ноль")
    } else if (userNum % 2 == 0) {
        console.log("четное число")
    } else {
        console.log("нечетное число")
    }
    if (userNum == -1) {
        break
    }
}