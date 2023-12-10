function solution(str, ending){
    return str.endsWith(ending)
}
console.log(solution('abc', 'bc'))


// function solution(str, ending){
//    // console.log(typeof(ending));
//     let regexp = new RegExp(`${ending}`,'gi') //
//     let  regexes = str.match(regexp);
//     //console.log(regexes);
//     let obj = str.regexes;
//     console.log(obj);
//     return ending != regexes[0]? false:true;
// }
// console.log(solution('abc', 'ab'));
// //console.log(solution('abc', 'd'));