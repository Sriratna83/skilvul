1. membuat sebuah folder kosong dengan namamu sendiri. <b>mkdir Sri-Ratna-Ningsih</b> 
2. membuat sebuah file dengan nama README.md, isi file tersebut dengan kalimat <mark>"Halo perkenalkan aku halaman utama"</mark> <b>touch README.md</b> | echo Halo perkenalkan aku halaman utama >> <b>README.md</b>
3. insialisasi folder tersebut dengan Git, kemudian dokumentasikan menggunakan commit dengan pesan "Inisialisasi Git Repository". <b>git init</b> | <b>git commit -m "Inisialisasi Git Repository"</b>
4. buat branch baru dengan nama cv, hal ini berguna agar histori kita tidak tercampur. <b>git branch cv</b>
5. pindah branch kedalam cv, kemudian buat file dengan nama cv.txt dan isi file tersebut dengan kalimat: "Ini adalah file CV". <b>git checkout cv</b> | <b>touch cv.txt</b>
6. kemudian dokumentasikan menggunakan commit dengan pesan "Inisialisasi CV"
7. tambahkan 3 perusahaan yang akan kamu lamar, dan setiap menuliskan 1 nama perusahaan kamu harus melakukan dokumentasi menggunakan commit
8. kembali ke branch master
9. ubah file README.md menjadi
      Halo perkenalkan aku halaman utama
      Ini adalah update pertama pada branch master
      jangan lupa untuk mendokumentasikannya menggunakan commit dengan pesan
      "update master pertama"
0/gabungkan branch cv kedalam branch master menggunakan perintah git merge
unggah Git Repository tersebut kedalam GitHub