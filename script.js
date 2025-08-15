const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const restartBtn = document.getElementById('restartBtn');
const srLive = document.getElementById('srLive');

function speak(text) {
  // screen reader gets the aria-live update
  srLive.textContent = text;
  // optional synthesized voice for background audio
  if ('speechSynthesis' in window) {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'en-US';
    // adjust volume/rate/pitch as needed
    utter.volume = 1;
    utter.rate = 1;
    speechSynthesis.speak(utter);
  }
}

startBtn.addEventListener('click', () => speak('Stopwatch started'));
stopBtn.addEventListener('click', () => speak('Stopwatch stopped'));
restartBtn.addEventListener('click', () => speak('Stopwatch reset'));

// Example: announce current time (call with formatted string)
function announceTime(minutes, seconds) {
  const text = `Elapsed time: ${minutes} minutes, ${seconds} seconds`;
  speak(text);
}
