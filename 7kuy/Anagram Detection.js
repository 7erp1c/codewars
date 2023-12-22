var isAnagram = function(test, original) {
    let arr1 = test.toLowerCase().split('').sort().join('');
    let arr2 = original.toLowerCase().split('').sort().join('');
    console.log(arr1);
    console.log(arr2);
    if (arr1 === arr2){
        return true;
    }else false;
};
console.log(isAnagram("foefet", "toffee"));