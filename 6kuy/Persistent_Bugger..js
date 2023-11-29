function persistence(num) {
    let result = 0;
    let arr = num.toString();
while (arr.length > 1){
    arr.split('').reduce((a,b)=> a * b,1).toString();
    arr++;
}
return result;//code me
}
console.log(persistence(1155));