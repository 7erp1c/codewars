function removeSmallest(numbers) {
    let min = numbers.indexOf(Math.min(...numbers));
    console.log(min);
    return [...numbers.slice(0,min), ...numbers.slice(min+1)];
}
console.log(removeSmallest([2, 3, 1, 4, 5]));