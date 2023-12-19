//Rot13 шифр, сдвинуть каждую букву на 13 по алфавиту.
function rot13(message){

        const Alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';

        return message.replace(/[a-z]/gi, a => Alpha[Alpha.indexOf(a)+13]);

}
console.log(rot13('EBG13 rknzcyr.'));

//'abcdefghijklmnopqrstuvwxyz abcdefghijklm ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM'; //следование