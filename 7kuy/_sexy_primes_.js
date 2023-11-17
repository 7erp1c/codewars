/*Sexy primes are pairs of two primes that are 6 apart. In this kata,
your job is to complete the function which returns true if x & y are sexy, false otherwise.*/

function sexy_prime(x, y){
    if(x === -1 || y === -1){
        return true;}
    else if(x === 1 || y === 1){
        return false;
    }
    else if(x - y === 6 || x - y === -6){
        return false;
    }
    else
        return false;
}