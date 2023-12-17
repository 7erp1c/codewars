//Выдать индекс массива всех заглавных букв:


var capitals = function (word) {
    let regex = /[A-Z]/g;//создаем регулярное выражение
    let arr = [];//переменная принимает массив

    while((isMatch = regex.exec(word)) != null) {// exec - метод рег выражений, проверяет рег выражение в массиве и вернет, что нашел
        arr.push(isMatch.index);
    }
    return arr;
};