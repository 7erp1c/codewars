// Найти сумму разложенного числа (4 = 1+2+3+4)
//Grasshopper - Summation
var summation = function (num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}