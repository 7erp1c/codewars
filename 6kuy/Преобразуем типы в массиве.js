function sumMix(x){
    let arr = x.map(index=>{
        return Number(index);
    })

    return arr.reduce((a,b)=>a+b);
}