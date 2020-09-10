function playSound(keyLetter) {
  console.log(keyLetter);
  switch (keyLetter) {
    case "w":
      audioObj = new Audio("sounds/crash.mp3");
      audioObj.play();
      break;
    case "a":
      audioObj = new Audio("sounds/kick-bass.mp3");
      audioObj.play();
      break;
    case "s":
      audioObj = new Audio("sounds/snare.mp3");
      audioObj.play();
      break;
    case "d":
      audioObj = new Audio("sounds/tom-1.mp3");
      audioObj.play();
      break;
    case "j":
      audioObj = new Audio("sounds/tom-2.mp3");
      audioObj.play();
      break;
    case "k":
      audioObj = new Audio("sounds/tom-3.mp3");
      audioObj.play();
      break;
    case "l":
      audioObj = new Audio("sounds/tom-4.mp3");
      audioObj.play();
      break;
    default:
      console.log("Button not found!");
  }
}

// Detect mouse click
var buttons_array = document.querySelectorAll("button");

for (var i = 0; i < buttons_array.length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    playSound(this.innerHTML);
  });
}

// Detect keyboard press
document.addEventListener("keydown", event => {
  playSound(event.key);
});
