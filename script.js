let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guess-input');
const checkBtn = document.getElementById('check-btn');
const message = document.getElementById('message');
const attemptsCount = document.getElementById('attempts');
const resetBtn = document.getElementById('reset-btn');

checkBtn.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Введіть число від 1 до 100!';
        return;
    }

    attempts++;
    attemptsCount.textContent = attempts;

    if (userGuess === randomNumber) {
        message.textContent = `Вітаємо! Ви вгадали число ${randomNumber} за ${attempts} спроб(и)!`;
        checkBtn.disabled = true;
        guessInput.disabled = true;
        resetBtn.style.display = 'inline-block';
    } else if (userGuess < randomNumber) {
        message.textContent = 'Загадане число більше!';
    } else {
        message.textContent = 'Загадане число менше!';
    }
});

resetBtn.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsCount.textContent = attempts;
    message.textContent = '';
    guessInput.value = '';
    guessInput.disabled = false;
    checkBtn.disabled = false;
    resetBtn.style.display = 'none';
});
