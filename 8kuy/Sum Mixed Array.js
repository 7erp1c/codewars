function sumMix(x){
    let arr = x.map(index=>{
        return Number(index);
    })
    console.log(arr);
    return arr.reduce((a,b)=>a+b);
}console.log(sumMix([9, 3, '7', '3']))