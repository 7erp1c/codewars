//Найти иголку в массиве, вернуть "found the needle at position " + место в массиве (индекс)
function findNeedle(haystack) {
    // your code here
    for (i = 0 ; i < haystack.length ; i++){
        if(haystack[i]==="needle"){
            return "found the needle at position " + i
        }
    }
}