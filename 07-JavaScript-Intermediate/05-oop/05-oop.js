// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
// const obj = {
//     fun1: function() {
//       console.log("fun1", this);
//     },
//     fun2: () => {
//       console.log("fun2", this);
//     }
//   };
  
//   obj.fun1();
//   obj.fun2();
  

//Soal - 02
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
//Encapsulation adalah membungkus class dan menjaga apa apa saja yang ada didalam class tersebut, baik method ataupun atribut, agar tidak dapat di akses oleh class lainnya.
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
//Abstraction dapat diartikan sebagai cara pandang kita terhadap suatu sistem yang terdiri dari kumpulan subsistem yang saling berinteraksi.
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// Inheritance atau Pewarisan/Penurunan adalah konsep pemrograman dimana sebuah class dapat ‘menurunkan’ property dan method yang dimilikinya kepada class lain. Konsep inheritance digunakan untuk memanfaatkan fitur ‘code reuse’ untuk menghindari duplikasi kode program.
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
//Polymorphism adalah suatu aksi yang memungkinkan pemrogram menyampaikan pesan tertentu keluar dari hirarki obyeknya, dimana obyek yang berbeda memberikan tanggapan/respon terhadap pesan yang sama sesuai dengan sifat masing-masing obyek.

//Soal - 03
// class Phone { 
//     constructor(brand, storage, ram) {
//         this.brand = String(brand)
//         this.storage = Number(storage)
//         this.ram = Number(ram)
//     }

//     getBrandName() {
//         return this.brand
//     }
    
//     setBrandName(brand) {
//         this.brand = String(brand)
//     }
    
//     printSpecification() {
//         console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`)
//     }
    
//     setSpecification(storage, ram) {
//         this.storage = Number(storage)
//         this.ram = Number(ram)
//     }
    
// }

// const phone = new Phone("Skilvul Mobile co", 64, 4);

// console.log(phone.getBrandName());
// phone.setBrandName("SM.co")
// console.log(phone.getBrandName());

// phone.printSpecification();
// phone.setSpecification(32, 2);
// phone.printSpecification();

//Soal - 04
class Student {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.courseOfferings = [];
    }
    
    takeNewCourse(course) {
       const 
     }
    
    takeATest(course) {
        
    }
    
    courseAttendance(course) { 
        
     }
  }
  
  class CourseOffering { 
    constructor(course) {
        this.course = course;
        this.attendance = 0;
        this.grade = 0;
      }
   }
  
  class Course { 
    constructor(subject, quota, attendance) {
        this.subject = subject;
        this.quota = quota;
        this.attendance = attendance;
      }
      getSubject() {
        return this.subject;
      }
      getAttendance() {
        return this.attendance;
      }
      decreaseQuota() {
        this.quota--;
      }
      
   }
  
  
  const biology = new Course("biology", 10, 3);
  const physics = new Course("physics", 10, 2);
  
  const johnWatson = new Student("john watson", "male");
  
  johnWatson.takeNewCourse(biology);
  johnWatson.takeNewCourse(physics);
  
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(biology);
  johnWatson.courseAttendance(physics);
  
  console.log(biology.quota);
  console.log(physics.quota);
  
  johnWatson.takeATest(biology);
  johnWatson.takeATest(physics);
  
  console.log(johnWatson.courseOfferings);
  