const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage( arr ) {
   const average = arr.reduce((a, b) => a + b) / arr.length;
   let value = 0;
   arr.forEach(element => {
       if (element > average){
           value++
           
       }
       
   });
   return value;
 }

console.log(getAverage(arr1))
console.log(getAverage(arr2))