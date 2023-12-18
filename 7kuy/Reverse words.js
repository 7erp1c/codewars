//Вертануть слова оставив их на своём месте реверсоджоиновосплитовое бомбяо
function reverseWords(str) {
    let arr =  str.split('');
    console.log(arr);
    let arr1 =  arr.reverse().join('').split(' ').reverse().join(' ');
    console.log(arr1)// Go for it
}
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));