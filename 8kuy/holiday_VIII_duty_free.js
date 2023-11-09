//The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the savings
// over the normal high street price would effectively cover the cost of your holiday.
//All inputs will be integers. Please return an integer. Round down.

function dutyFree(normPrice, discount, hol){
    return Math.floor(hol/((normPrice*discount)/100))
}//