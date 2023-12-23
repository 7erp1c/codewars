function duplicateEncode(word){
    return word
        .toLowerCase()//регистр
        .split('')//мэссив
        .map( function (q, w, r) {
            return r.indexOf(q) == r.lastIndexOf(q) ? '(' : ')'//два поиска Ласт начинает поиск с конца массива
        })
        .join('');// в строку
}
console.log(duplicateEncode("diin"));