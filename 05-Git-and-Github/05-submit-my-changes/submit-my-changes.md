1. Fork repository GitHub https://github.com/impactbyte/tech4impact-students-bio.git menggunakan akun Github kamu 
![fork](https://user-images.githubusercontent.com/90690012/134177232-74a59c7b-0daa-4072-a569-2af9362328e7.PNG)
2. Clone remote repository dari hasil fork tersebut. Jangan clone dari repository originalnya. **git clone https://github.com/Sriratna83/tech4impact-students-bio.git** 
3. Buatlah branch baru dengan nama lengkap kamu. Misalnya `david-winalda`. Jangan melakukan perubahan pada branch `master`. **git branch sri-ratna-ningsih**
4. Checkout ke dalam branch tersebut yang telah kamu buat **git checkout sri-ratna-ningsih**
5. Buatlah 1 file format `.md` dengan nama lengkap kamu. Contoh `davidwinalda.md` **touch sriratnaningsih.md**
6. Isi file tersebut `davidwinalda.md` dengan konten di bawah ini:
```
Nama Lengkap: David Winalda
Umur: 27
Pesan yang ingin disampaikan: Semangat untuk kamu yang disana sedang berjuang
```
![cat](https://user-images.githubusercontent.com/90690012/134177544-c45bde99-0d8c-47e2-b54d-3f7842cfdeba.PNG)
7. Masukkan file `.md` tersebut ke dalam staging area **git add sriratnaningsih.md**
8. Commit dengan memberikan pesan nama file `.md` kamu ** git commit -m "sriratnaningsih.md"
9. Merge branch yang telah kamu buat ke dalam branch `master` **git checkout master**, **git merge sri-ratna-ningsih**
10. Push ke dalam branch `master` **git push origin master**
11. Lakukan pull request dari GitHub Repository yang telah kamu fork untuk digabungkan ke dalam branch `master` pada GitHub Repository aslinya. 
![pull](https://user-images.githubusercontent.com/90690012/134177507-13ed4bf0-f70c-4212-8ab2-29dc856d605d.PNG)