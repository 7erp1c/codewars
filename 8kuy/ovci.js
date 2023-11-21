function countSheep(amountOfSheep) {
    // create a variable to save the result
    let result = "";

    for (let i = 1; i <= amountOfSheep; i++) {
        // create message based on the current number, add it to the result
        result += `${i} sheep...`;
    }

    return result;
}