// complete the function
//Если в строе есть прописные, вернуть всю строку с пробелом перед прописной;
function solution(string) {
    return string.replace(/[A-Z]/g, ' $&');
}