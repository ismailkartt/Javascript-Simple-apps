const words = ['kedi', 'köpek', 'araba', 'ev', 'bilgisayar']; // Kelime listesi
let selectedWord = words[Math.floor(Math.random() * words.length)]; // Rastgele kelime seç

let guessedWord = Array(selectedWord.length).fill('_'); // Doğru tahmin edilen harfleri tut

const wordDisplay = document.getElementById('wordDisplay');
const guessInput = document.getElementById('guessInput');

function displayWord() {
    wordDisplay.textContent = guessedWord.join(' ');
}

function guess() {
    const guess = guessInput.value.toLowerCase();
    
    if (guess.length === 1) {
        // Tek harf tahmini
        let found = false;
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === guess) {
                guessedWord[i] = guess;
                found = true;
            }
        }
        if (!found) {
            console.log(`${guess} harfi yanlış.`);
        }
    } else if (guess.length === selectedWord.length) {
        // Tam kelime tahmini
        if (guess === selectedWord) {
            console.log('Tebrikler, kelimeyi doğru tahmin ettiniz!');
            guessedWord = selectedWord.split('');
        } else {
            console.log('Maalesef, kelimeyi yanlış tahmin ettiniz.');
        }
    } else {
        console.log('Geçersiz giriş. Lütfen tek harf veya tam kelime girin.');
    }

    displayWord();
    guessInput.value = '';
}

displayWord();
