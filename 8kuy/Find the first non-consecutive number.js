//найти элемент в массиве не сопадающий по очередности, вывести его
function firstNonConsecutive (arr) {
    let arra = arr.find((a,b)=>a !== b + arr[0]);
    return Number.isInteger(arra)?arra:null;
}
console.log(firstNonConsecutive([6,7,8,10,11,12]));