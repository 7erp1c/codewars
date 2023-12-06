//Вывести средню буку строки, если четная 2
function getMiddle(s){
    let sLength = s.length;
    let sred = Math.floor(sLength/2 - 1);
    let end = sred + 2;
    console.log(sred);
    if (sLength % 2 == 0){
        return s.slice(sred,end)
    } else
        return s.slice(sred+1,sred+2)
    //Code goes here!
} console.log(getMiddle('Привети'));

