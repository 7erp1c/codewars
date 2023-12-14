function getAge(inputString){

    let arr = inputString.match(/\d+/).join("");
    console.log(arr);
    return  parseInt(arr);

    // return the girl's correct age as an integer. Happy coding :)
}
console.log(getAge("4 years old"));