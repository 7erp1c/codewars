function sumArray(array) {
    let arr = array.sort((a,b)=>a-b);
    arr.shift();
    arr.pop();
    if (array.length <=2 ){
        return 0;
    }else{
        return arr.reduce((a,b)=>a+b);
    }
}
console.log(  sumArray([-6, 20, -1, 10, -12 ]) );