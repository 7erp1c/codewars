//отсортировать нечетные числа  в массиве оставляя четные на своём месте, нечетные остаются на своём месте, только сортируются
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    console.log(odd);
    return array.map((x) => x % 2 ? odd.shift() : x);
}

//Второй способ
function sortArray(array1) {
    // Return a sorted array.
    var ans = [],
        odd = [];
    console.log(array1, ans, odd);
    for (let i = 0; i < array.length; i++) {
        if (array1[i] % 2 != 0) {
            ans[i] = -Infinity;
            odd.push(array1[i]);
        } else {
            ans[i] = array1[i];
        }
        //     console.log(array1[i],ans[i])
    }
    odd.sort(function (a, b) {
        return a - b;
    });
    console.log(odd);
    for (let i = 0; i < array1.length; i++) {
        if (ans[i] == -Infinity) {
            ans[i] = odd.shift();
        }
    }
    return ans;
}