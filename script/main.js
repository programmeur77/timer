const displayTimer = document.querySelector('.timer');

setInterval(() => {
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  displayTimer.innerText = `${hour}:${minutes}:${seconds}`;
}, 1000);
