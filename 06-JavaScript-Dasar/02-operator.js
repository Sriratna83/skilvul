/// Soal - 01
/// Dibawah ini akan ditampilkan daftar pengeluaran bulan ini beserta gaji yang akan diterima, tugas-mu adalah untuk menghitung gaji yang tersisa

/// Pegeluaran
 const gundam = 750000
 const makan = 2000000
 const kost = 1000000
 const subscription = 250000

/// Gaji
const gajiPokok = 5000000;
const gajiBonus = 10/100 * gajiPokok;
const gajiLembur = 5/100 * gajiPokok;

/// Sisa Gaji
const sisaGaji = gajiPokok + gajiBonus + gajiLembur - gundam - makan - kost - subscription ;
console.log(sisaGaji);


/// Soal - 02
/// Gunakan operator yang tepat untuk mengetahui apakah 2 variable dibawah ini memiliki nilai yang sama (tipe data tidak termasuk)
const oneInString = "1";
const oneInNumber = 1;
const isSame = oneInString == oneInNumber;
console.log(isSame)


/// Soal - 03
/// Gunakan operator yang tepat untuk mengetahui apakah studentA memiliki nilai yang lebih tinggi atau sama dengan studentB
const studentA = 75;
const studentB = 80;
const isHigher = studentA >= studentB;
console.log(isHigher)

/// Soal - 04
/// Gunakan operator yang tepat untuk membedakan 2 buah variable yang terdapat pada soal-02 berdasarkan value-nya (tipe data juga dihitung)
const final = oneInString === oneInNumber;
console.log(final)