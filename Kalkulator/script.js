// menyeleksi semua tag button kemudian dimasukkan ke variable buttons
const buttons = document.querySelectorAll("button");

// menyelekasi elemen display kemudian dimasukan ke dalam variable display
const display = document.querySelector(".display");

// memanggil fungsi button untuk setiap buttons
buttons.forEach(function(button) {
    // tambahkan eventListener untuk setiap klik kemudian dikalkulasikan
    button.addEventListener("click", calculate);
});

// fungsi calculate
function calculate(event) {
    // nilai tombol yang diklik
    const clickedButtonValue = event.target.value;

    if (clickedButtonValue === "=") {
        // check display, apabila tidak kosong maka dilakukan perhitungan
        if (display.value !== "") {
            // perhitungan dijalankan lalu ditampilan di bagian display
            display.value = eval(display.value);
        }
    } else if (clickedButtonValue === "C") {
        // jika tombol C diklik, maka display akan kembali kosong
        display.value = "";
    } else {
        // jika kondisi tidak ada yang terpenuhi, maka hanya akan ditampilkan di display
        display.value += clickedButtonValue;
    }
}