/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE

for (let i = 1; i <= 100; i++) {
    let notPrime = false;
    if (i >= 2){
        for (let j = 2; j <= i; j++) {
            if (i%j===0 && j!==i) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
            console.log(i);
     
        }
    }
    

}



// /// Soal - 02
// /// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

// /// EDIT HERE
let start = 2;
while (primeCounter < 50) {
    let isPrime = true;

    for(let i = 2; i < start-1; i++){
    if(start % i == 0){
        isPrime = false
        break
    }
}

if(isPrime){
    primeCounter += 1
}

if (primeCounter == 50) {
    fiftiethPrime = start;
    console.log(`fiftiethPrime should be ${fiftiethPrime}`);
    
}
start++
}


// /// Soal - 03
// /// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

// /// EDIT HERE
let first = 1;
do { 
    if (first % 2) {
        oddCounter += 1
        
    }
    if(oddCounter == 50 ){
        fiftiethOdd = first;
        console.log(`fiftiethOdd should be ${fiftiethOdd}`);
    }
    first++
} while (oddCounter < 50)


