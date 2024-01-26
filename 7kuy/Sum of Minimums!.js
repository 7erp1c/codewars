//Вариант 1:
function sumOfMinimums(arr) {
    let result = 0,
        mins = [],
        temp = 0;
    for(i = 0; i < arr.length; i++){
        temp = arr[i][0]
        for(j = 1;j < arr[i].length;j++){
            if(temp > arr[i][j]){
                temp = arr[i][j]
            }
        }
        result += temp;
    }
    return result
}
    console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));

const sumOfMinimums1 = arr =>
    arr.reduce((acc, curr)=>acc+Math.min(...curr),0);

console.log(sumOfMinimums1([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));