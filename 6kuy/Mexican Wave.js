

function wave (str) {
    let result = [];// создадим переменную которая принимает массив
    if([...str].length === 0) {//если массив пустой, вернуть пустой массив
        return [];
    }
    for(let i = 0; i < str.length; i++){
        let copy = str.split('');//копируем каждую итерацию элементы массива
        console.log(copy)
        if(copy[i] === ' '){//если встретился пробел
            continue; //завершаем итерацию и продолжаем цикл дальше
        }
        copy[i] = copy[i].toUpperCase('');//берем каждый i-элемент Uперируем
        console.log(copy[i]);
        result.push(copy.join(''))
    }
    return result
}
console.log(wave("hello"))