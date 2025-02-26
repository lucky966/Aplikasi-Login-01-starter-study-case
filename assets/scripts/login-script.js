/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

// Membuat variable untuk setiap elemen view
const loginFormElement = document.querySelector("#loginForm")
const inputEmailElement = document.querySelector("#inputEmail")
const inputPasswordElement = document.querySelector("#inputPassword")
/* Membuat variable untuk menyimpan informasi email & password */
const expectedEmail = "admin@dicoding.com"
const expectedPassword = "superpassword"

// Menambahkan aksi ketika tombol submit di tekan
loginFormElement.addEventListener("submit", function (event) {
  event.preventDefault()
  // Mendapatkan nilai dari masing2 input (email, password) ketika tombol ditekan
  const email = inputEmailElement.value
  const password = inputPasswordElement.value
// Memastikan bahwa nilai email & password sesuai dengan nilai yang tersimpan
  if (email === expectedEmail && password === expectedPassword) {
    // jika sesuai maka pindah ke halaman home
    goToHome()
  } else {
    // jika tidak sesuai maka tampilkan pop up error
    showPopUp()
  }
  // TODO 1 : Mendapatkan input email dan password pengguna dari form.

  /* TODO 2 : Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */
})
