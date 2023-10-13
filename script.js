document.addEventListener("DOMContentLoaded", function() {
  const registrationForm = document.getElementById("registration-form");
  const outputElement = document.getElementById("masuk");

  registrationForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const nama = document.getElementById("nama").value;
      const nim = document.getElementById("nim").value;
      const kelas = document.getElementById("kelas").value;

      // Menampilkan data yang diisi di elemen dengan ID "output"

      alert(
        ("DATA YANG DI TERIMA")+ "\n \n"+
        ("Nama Anda : " + nama)+ "\n"+
        ("NIM Anda : " + nim)+ "\n"+
        ("Kelas Anda : " + kelas)
        );
  });
});
