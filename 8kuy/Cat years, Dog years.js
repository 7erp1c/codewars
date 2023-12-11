var humanYearsCatYearsDogYears = function(humanYears) {
    let firtsYears = 15,
        secondYears = 9,
        eachYearsDog = 24+(5 * (humanYears-2)),

        eachYearCat = 24+(4 * (humanYears-2));
    console.log(eachYearsDog);
    let arr = [];
    if(humanYears == 1){
        arr.push(1,15,15);
        return arr;
    } else if (humanYears == 2){
        arr.push(2,24,24);
        return arr;
    } else if (humanYears>=3){

        const arr2 = [...arr,humanYears,eachYearCat,eachYearsDog];
        return arr2;
    }
    // Your code here!

}
console.log(humanYearsCatYearsDogYears(10))