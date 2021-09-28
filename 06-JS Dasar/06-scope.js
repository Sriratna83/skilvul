/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/// - Pada Javascript terdapa 2 variable scope yaitu Global Scope dan Local Scope
/// - Global Scope adalah variabel yang dapat diakses dimanapun dalam sebuah file sedangkan Local Scope merupakan variabel yang pendeklarasiannya didalam bloks oleh karena itu, variabel hanya dapat daikses dalam bloks saja
// -imlementasi Global Soope

let a = "HelloWorld";

function say () {
    console.log(a);
}
say();

// -imlementasi Local Soope
let a = "Hello";

function say () {
    let b = "World"
    console.log(a + b);  
}
say();

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///- console.log akan menampilkan Mariah
///- Karena terdapat parameter pada funfiction printFirstName yang dimana funfiction akan berjalan. 

const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
