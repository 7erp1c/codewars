//Даны 2 числа, сложить все между, включая их, они в хаотичном порядке

function getSum(a, b)
{

    let max = Math.max(a,b),//найдем мин и мак значение и передадим в переменную
        min = Math.min(a,b);
    console.log(max);
    console.log(min);
    return (max-min+1)*(max+min)/2;//Формула суммы целых чисел или
    //формула суммы n членнов арифметической поледовательности
    //где (max-min+1) - количество чисел включая min & max
//
}console.log(getSum(2,16));
