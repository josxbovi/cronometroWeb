let running = false;
let startTime;
let elapsedTime = 0;
let timerInterval;

function startStop() {
    if (running) {
        // Pausar
        clearInterval(timerInterval);
        running = false;
    } else {
        // Iniciar o continuar
        if (elapsedTime === 0) {
            startTime = new Date().getTime();
        } else {
            startTime = new Date().getTime() - elapsedTime;
        }
        timerInterval = setInterval(updateTime, 1000);
        running = true;
    }
}

function updateTime() {
    const currentTime = new Date().getTime();
    elapsedTime = currentTime - startTime;
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById("display");
    const time = new Date(elapsedTime);
    const hours = time.getUTCHours().toString().padStart(2, "0");
    const minutes = time.getUTCMinutes().toString().padStart(2, "0");
    const seconds = time.getUTCSeconds().toString().padStart(2, "0");
    display.textContent = `${hours}:${minutes}:${seconds}`;
}

function reset() {
    clearInterval(timerInterval);
    running = false;
    elapsedTime = 0;
    updateDisplay();
}
