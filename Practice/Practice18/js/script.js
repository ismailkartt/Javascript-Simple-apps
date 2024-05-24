document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn');
    const colorSpan = document.getElementById('color');
    const bg = document.getElementById('bg');
    
    const colors = ['red', 'black', 'blue', 'wheat'];

    btn.addEventListener('click', function() {
        // Rastgele bir renk seç
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Arka plan rengini değiştir
        bg.className = ''; // Önce mevcut sınıfları temizle
        bg.classList.add(randomColor);
        
        // Seçilen rengi ekrana yaz
        colorSpan.textContent = randomColor;
    });
});
