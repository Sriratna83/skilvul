/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/* - Type Error terjadi ketika kita type dta yang akan kita gunakan tidak kompatibel
   - Reference Error terjadi ketika kita menggunakan variabel yang belum kta dekrlarasikan
     atau menjalankan varibel terlebih dahulu baru melakukan dekralasi
   - Range Error terjadi apabilah ketika memanupulasi panjang object yang tidak
     sesuai dengan panjang sebenarnya
   - Syntax Error terjadi ketika menggunakan sesuatu yang tidak sesuai dengan syntax yang 
     sebenarnya
*/

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/* - apabila kita menjalankan baris kode dibawah akan terjadi error
   - Reference Error
   - Karena ketika kode dijalankan akan dimulai dari atas oleh karena itu, akan menjalankan perintah 
     console.log terlebih dahulu, terjadi error karena salaryWithVar dan salaryWithConst baru didekralasikan 
     setelahnya dijalankan.

*/
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
