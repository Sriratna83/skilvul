// // // soal - 01
// console.log("1. Soal - 01");
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [0, 3, 1, 10, 22];
// function sumOfArray(arr) {
//     if (arr.length==0){
//         return 0;
//     }
//     const val = arr[0];
//     return val + sumOfArray(arr.slice(1));
// }

// console.log(sumOfArray(arr1));
// console.log(sumOfArray(arr2));


// console.log("-----------------");
// // soal - 02
// console.log("2. Soal - 02");
// const avg1 = sumOfArray(arr1) /arr1.length;
// const avg2 = sumOfArray(arr2) /arr2.length;
// function countAboveAvg(arr, avg) {
//     if(arr.length === 0) {
//        return 0; 
//     }  return (arr[0] >= avg) + countAboveAvg(arr.slice(1), avg)
// }
// const totalAboveAvg1 = countAboveAvg(arr1, avg1);
// const totalAboveAvg2 = countAboveAvg(arr2, avg2);

// console.log(totalAboveAvg1);
// console.log(totalAboveAvg2);;

// console.log("-----------------");
// // soal - 03
// console.log("3. Soal - 03");
// const arr = [1, 2, 3, 4, 5];
// function searchInArray(arr, num) {
//     if (arr.length === 0) {
//         return "angka tidak ditemukan"
//     }
//     if(arr[arr.length-1] === num){
//         return "angka ditemukan pada index:" + (arr.length-1)
//     }
//     return searchInArray(arr.slice(0,-1), num)
// }

// searchInArray(arr, 6);
// searchInArray(arr, 1);
// searchInArray(arr, 8);

// console.log(searchInArray(arr, 6));
// console.log(searchInArray(arr, 1));
// console.log(searchInArray(arr, 8));

console.log("-----------------");
// soal - 04
console.log("4. Soal - 04");
function trianglePattern(start,end) {
    if (start === 0) {
        return;
    }
    let space = "";
    for (let index = 0; index < end; index++) {
        if (index < start - 1) {
            space += " " 
        }else{
         space += String.fromCharCode(64 + (end - start + (index - start) + 2))
        }
    }
    console.log(space);
    trianglePattern(start - 1, end)
}

trianglePattern(5, 5);