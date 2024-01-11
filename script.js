let countdownInterval;
let targetDate;
let paused = false;

function startCountdown() {
  targetDate = new Date(document.getElementById("datetime").value).getTime();

  if (isNaN(targetDate)) {
    alert("Please select a valid date and time.");
    return;
  }

  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
}

function stopCountdown() {
  clearInterval(countdownInterval);
  document.getElementById("countdown").innerHTML = "Countdown Stopped";
}

function waitCountdown() {
  if (!paused) {
    clearInterval(countdownInterval);
    paused = true;
  } else {
    countdownInterval = setInterval(updateCountdown, 1000);
    paused = false;
  }
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}
