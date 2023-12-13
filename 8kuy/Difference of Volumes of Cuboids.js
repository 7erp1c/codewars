function findDifference(a, b) {
    let arr1 = a.reduce((a,b)=>a*b);
    console.log(arr1);
    let arr2 = b.reduce((a,b)=>a*b);
    console.log(arr2);//loading...
    return Math.abs(arr1-arr2);
}
console.log(findDifference([3, 2, 5], [1, 4, 4]))