// получаем строку; надо посчитать скольк в ней гласных ===  a, e, i, o, u
function getCount(str) {
    let res = 0;

    let arr = str.split('');//разделяет строку и создаёт массив
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u')
            res++;
    }
    return res;
}
console.log(getCount('aefgrgij'))
