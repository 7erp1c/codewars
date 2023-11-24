//


var isSquare = function(n){
    if (n < 0){//по услови отрицательные числа false
        return false;
    }
    for (let i = 0;i<=n;i++){
        if (i ** 2 === n){//
            return true;
        } else;

    }
    return false;
    // fix me
}