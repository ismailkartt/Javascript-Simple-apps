async function getWeather() {
    const apiKey = 'YOUR_API_KEY'; // API anahtarınızı buraya ekleyin
    const city = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
            <h2>${city} Hava Durumu</h2>
            <p>Sıcaklık: ${data.main.temp}°C</p>
            <p>Hissedilen Sıcaklık: ${data.main.feels_like}°C</p>
            <p>Nem Oranı: ${data.main.humidity}%</p>
            <p>Rüzgar Hızı: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        console.error('Hava durumu alınamadı:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Hava durumu alınamadı. Lütfen geçerli bir şehir adı girin.</p>`;
    }
}
