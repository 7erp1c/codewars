//Two to One
function longest(s1, s2) {
    let arr_1 = s1.concat(s2).split('').sort();
    let arr = arr_1.filter((item,index)=>{
        return (arr_1.indexOf(item) === index);
    });
    return arr.join('');
    //console.log(arr_1);// your code
}
console.log(longest("aretheyhere", "yestheyarehere"));