/*is a leap year or not. In case you don't know the rules, here they are:
Years divisible by 4 are leap years,
but years divisible by 100 are not leap years,
but years divisible by 400 are leap years.
Tested years are in range 1600 ≤ year ≤ 4000.*/

function isLeapYear(year) {

    return (year % 400 === 0)||(year % 4 === 0 && year%100!==0);//
}
///надо догодаться использовать последние выражение через &&; Год високосный если делеться на 4 но не делится на 100ж