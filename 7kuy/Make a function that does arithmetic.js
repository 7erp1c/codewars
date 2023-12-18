function arithmetic(a, b, operator){

    switch (operator) {
        case "add":
            return a+b;
            break;
        case "subtract":
            return a-b;
            break;
        case "divide":
            return a/b;
            break;
        case "multiply":
            return a*b;
            break;

    }//your code here!
}
console.log(arithmetic(2,6,"add"));
//The four operators are "add", "subtract", "divide", "multiply".