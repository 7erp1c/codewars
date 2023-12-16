function bmi(weight, height) {
    let bimiii = weight/Math.pow(height,2);

    if (bimiii <= 18.5) {
        return "Underweight";
    } else if (bimiii <= 25) {
        return "Normal";
    } else if (bimiii <= 30) {
        return "Overweight";
    } else  {
        return "Obese";
    }
}
console.log(bmi(80,1.80));