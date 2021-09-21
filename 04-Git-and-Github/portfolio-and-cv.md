membuat sebuah folder kosong dengan namamu sendiri. <b>mkdir Sri-Ratna-Ningsih</b> 
membuat sebuah file dengan nama README.md, isi file tersebut dengan kalimat. 
"Halo perkenalkan aku halaman utama" <b>touch README.md</b> | echo Halo perkenalkan aku halaman utama >> <b>README.md</b>
insialisasi folder tersebut dengan Git, kemudian dokumentasikan menggunakan commit dengan pesan. <b>git init</b>
"Inisialisasi Git Repository" git commit -m "Inisialisasi Git Repository"
buat branch baru dengan nama cv, hal ini berguna agar histori kita tidak tercampur git branch cv
pindah branch kedalam cv, kemudian buat file dengan nama cv.txt dan isi file tersebut dengan kalimat: . git checkout cv
"Ini adalah file CV". touch cv.txt. 
kemudian dokumentasikan menggunakan commit dengan pesan
"Inisialisasi CV"
tambahkan 3 perusahaan yang akan kamu lamar, dan setiap menuliskan 1 nama perusahaan kamu harus melakukan dokumentasi menggunakan commit
kembali ke branch master
ubah file README.md menjadi
Halo perkenalkan aku halaman utama

Ini adalah update pertama pada branch master
jangan lupa untuk mendokumentasikannya menggunakan commit dengan pesan
"update master pertama"
gabungkan branch cv kedalam branch master menggunakan perintah git merge
unggah Git Repository tersebut kedalam GitHub