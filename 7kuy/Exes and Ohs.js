
function XO(str) {
    let resX = 0;
    let resO = 0;
  let tLc = str.toLowerCase();//по условию не должен быть чувствителен к регистру
     let arr = tLc.split('');// создаём из string array

    for (let i = 0; i < arr.length; i++) {//через loop_for проверяем каждый элемент массива
        if (arr[i] == 'x'){//используем вложенный цикл if/else if
            resX++//итерируем если есть буква x
        } else if  (arr[i] == 'o'){
            resO++//итерируем если есть буква y
        }
    }
    return resX == resO;//если равное количество возвращаем true
//code here
} console.log(XO('oooxxX'));