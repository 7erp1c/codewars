// Найти сумму массива без учета отрицательных чисел
// Используем метод .filter() чтобы отобрать только положительные числа,
//.reduce() суммирует все числа в массиве.


function positiveSum(arr) {

    return arr.filter(x => x >= 0).reduce((a,b)=>a+b,0)
}