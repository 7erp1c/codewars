function countSquares(cuts){
    return cuts==0? 1:6*Math.pow(cuts,2)+2;
}
console.log(countSquares(2));