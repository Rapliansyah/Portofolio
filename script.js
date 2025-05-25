document.getElementById('kontakForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;
  
    if (!nama || !email || !pesan) {
      alert('Mohon lengkapi semua kolom!');
      return;
    }
  
    alert(`Terima kasih, ${nama}! Pesan Anda berhasil dikirim.`);
  
    this.reset(); // Kosongkan kembali input
  });
  