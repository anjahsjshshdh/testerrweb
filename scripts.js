document.getElementById('donationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah halaman reload
    alert('Terima kasih atas donasi Anda!');
    this.reset(); // Reset form setelah donasi
});
