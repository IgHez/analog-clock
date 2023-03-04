const secondsHand = document.getElementById("seconds-hand");
const minutesHand = document.getElementById("minutes-hand");
const hoursHand = document.getElementById("hours-hand");

function getTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const timeInterval = 6;

  secondsHand.style.transform = `rotate(` + seconds * timeInterval + `deg)`;
  minutesHand.style.transform = `rotate(` + minutes * timeInterval + `deg)`;
  hoursHand.style.transform = `rotate(` + hours * timeInterval + `deg)`;
}

setInterval(getTime, 100);
