let hours = parseInt(prompt("Saatı daxil edin") || 0);
let minutes = parseInt(prompt("Deqiqeni daxil edin") || 0);
let seconds = parseInt(prompt("Saniyeni daxil edin") || 0);
let interval;

function updateDisplay() {
    document.querySelector('#hours').textContent = padNumber(hours);
    document.querySelector('#minutes').textContent = padNumber(minutes);
    document.querySelector('#seconds').textContent = padNumber(seconds);
}

function padNumber(number) {
    return number.toString().padStart(2, '0');
}

function startTimer() {
    updateDisplay();
    
    interval = setInterval(() => {
        if (seconds > 0) {
            seconds--;
        } 
        else if (minutes > 0) {
            minutes--;
            seconds = 59;
        } 
        else if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
        } 
        else {
            clearInterval(interval);
            alert("Vaxt bitdi!");
            return;
        }

        updateDisplay();
    }, 1000);
}

startTimer();