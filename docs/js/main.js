import initConfetti from "./confetti.js"

const canvas = document.getElementById("canvas");
const activator = document.getElementById("activator");
initConfetti(canvas, activator);

const showPlayer = document.getElementById("showplayer");
const soundSwitch = document.getElementById("soundswitch");
const soundSwitchOn = document.getElementById("soundswitch-on");
const soundSwitchOff = document.getElementById("soundswitch-off");
soundSwitch.addEventListener('click', function () {
  if (showPlayer.muted) {
    showPlayer.muted = false;
    soundSwitchOff.classList.add("collapse");
    soundSwitchOn.classList.remove("collapse");
  } else {
    showPlayer.muted = true;
    soundSwitchOn.classList.add("collapse");
    soundSwitchOff.classList.remove("collapse");    
  }
});
