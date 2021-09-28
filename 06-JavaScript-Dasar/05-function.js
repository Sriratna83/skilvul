/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxCalc(salary) {
    if (20_000_000 <= salary) {
        return 0.2 * salary;
    }
    else if (10_000_000 <= salary ) {
        return 0.1 * salary;
    }
    else if (5_000_000 <= salary ) {
        return 0.05 * salary ;
    } 
    else {
        return 0;
    }
 }
 console.log(taxCalc(4_500_000));
 


// /// Soal - 02
// /// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

// /// Spesifikasi BMI
// /// - "under weight" apabila $BMI < 18.5
// /// - "normal" apabila 18.5 < $BMI < 24.9
// /// - "over weight" apabila 25 < $BMI < 29.9
// /// - "obese" apabila 30 < $BMI < 34.9
// /// - "extremely obese" apabila 35 < BMI

// /// Parameter
// /// - (Number) `height` ⇒ tinggi seseorang (cm)
// /// - (Number) `weight` ⇒ berat badan seseorang (kg) 

// /// Return Value
// /// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
// ///   (weight/(height^2)) * 10000

// /// EDIT HERE
function checkBMI(weight, height) { 
    let $BMI = (weight / (height ** 2)) * 10000;

    if(35 < $BMI ){
        return "extremely obese";
    }else if(30 < $BMI){
        return "obese";
    }else if(25 < $BMI){
        return "over weight";
    }else if(18.5 < $BMI){
        return "normal";
    }else{
        return "under weight";
    }
    }
console.log(checkBMI(80,170))


// // /// Soal - 03
// // /// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

// // /// Parameter
// // /// - (String) sentence => kalimat yang nanti akan diubah

// // /// Return Value
// // /// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

// // /// EDIT HERE
function convToUpperCase(sentence) {
    let word = sentence.toLowerCase().split(' ');
    for ( let i = 0; i < word.length; i++){
        word[i] = word[i].charAt(0).toUpperCase()+ word[i].substring(1);
    }
    return word.join(' ')
 }
 console.log(convToUpperCase("Hello bandung"))


// // /// Soal - 04
// // /// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

// // /// Spesifikasi
// // /// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
// // /// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
// // /// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

// // /// Parameter
// // /// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

// // /// Result Value
// // /// (String) huruf yang pertama kali tidak ada kembarannya

// // /// EDIT HERE
function firstNonRepeatedChar(word) { 
    let kata = word.split(" ")
        if (kata.length > 1) {
            return "kata tidak boleh dipisah";
        }
        else{
            for(let i = 0; i < word.length; i++){
                let l = word[i]
                let c = false;
                for(let j = 0; j <word.length; j++){
                    if(l == word[j] && j != i){
                        c = true;
                        break;
                    }
                }
                if(c == false){
                    return l;
                    break;
                }
            }
            return ""
        }
    }
    
 console.log(firstNonRepeatedChar("Hello world"));
 console.log(firstNonRepeatedChar("alloha"));
 console.log(firstNonRepeatedChar("wooohwh"));

