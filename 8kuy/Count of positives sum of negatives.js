function countPositivesSumNegatives(input) {
   if (!input||input.length<1){
      return [];
   }
   let s = 0, z = 0;
   input.forEach(a => {
      if (a > 0) {
         s++;
      } else {
         z+=a;
      }
   });
   return [s,z];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));