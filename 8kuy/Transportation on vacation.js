function rentalCarCost(d) {
    let rent = d * 40;

    if (d <= 2){
        return rent;
    } else if (d <= 6){
        return rent - 20;
    } else {
        return rent - 50;
    }
}
// Youser solution here