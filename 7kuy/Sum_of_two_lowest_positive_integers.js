function sumTwoSmallestNumbers(numbers) {
    return numbers.sort((a,b)=>a-b).slice(0,2).reduce((a,b)=>a+b,0);//Code here
}
console.log(sumTwoSmallestNumbers([3,5,88,2,99,1123,4]))

//let arr = numbers[0]+numbers[1];
