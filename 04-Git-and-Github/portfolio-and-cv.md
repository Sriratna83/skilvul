1. membuat sebuah folder kosong dengan namamu sendiri <b>mkdir Sri-Ratna-Ningsih</b>
2. membuat sebuah file dengan nama `README.md`, isi file tersebut dengan kalimat<br>`"Halo perkenalkan aku halaman utama"`. <b>touch README.md<b>, <b>echo Halo perkenalkan aku halaman utama >> README.md</b>
3. insialisasi folder tersebut dengan Git, kemudian dokumentasikan menggunakan `commit` dengan pesan<br>`"Inisialisasi Git Repository"` <b>git init</b>, <b>git commit -m "Inisialisasi Git Repository"</b>
4. buat `branch` baru dengan nama `cv`, hal ini berguna agar histori kita tidak tercampur <b>git branch cv</b>
5. pindah `branch` kedalam `cv`, kemudian buat file dengan nama `cv.txt` dan isi file tersebut dengan kalimat:<br>`"Ini adalah file CV"`. <b>git checkout cv</b>, <b>cv.txt<b>, <b>echo Ini adalah file CV >> cv.txt</b>
6. kemudian dokumentasikan menggunakan `commit` dengan pesan<br>`"Inisialisasi CV"` <b>git commit -m "Inisialisasi CV"</b>
7. tambahkan 3 perusahaan yang akan kamu lamar, dan setiap menuliskan 1 nama perusahaan kamu harus melakukan dokumentasi menggunakan `commit` <b>echo Google >> cv.txt</b>,<b>git commit -m "Google"</b>, <b>echo YouTube >> cv.txt</b>, <b>git commit -m "YouTube"</b>, <b>echo Tokopedia >> cv.txt</b>, <b>git commit -m "Tokopedia"</b>
8. kembali ke `branch master`. <b>git checkout cv</b>
9. ubah file `README.md` menjadi
    ```
    Halo perkenalkan aku halaman utama

    Ini adalah update pertama pada branch master
    ```
    jangan lupa untuk mendokumentasikannya menggunakan `commit` dengan pesan<br>`"update master pertama"`. <b>echo Ini adalah update pertama pada branch master >> README.md</b>, <b>git commit -m "update master pertama"</b>
10. gabungkan `branch cv` kedalam `branch master` menggunakan perintah `git merge` <b>git merge cv</b>
11. unggah Git Repository tersebut kedalam GitHub <b>git push origin master</b>
