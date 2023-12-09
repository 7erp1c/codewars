function isPalindrome(x) {
    let xLower = x.toLowerCase();
    console.log(x);
    let arr = xLower.split('').reverse().join('');
    arr.toString();
    console.log(arr);
return xLower == arr;
   // your code here
}
console.log(isPalindrome("Abba"));