function findAverage(array) {
    if (array.length == 0){
        return 0;
    } else {
        return (array.reduce((a,b)=>a+b,0))/array.length;
    }
}