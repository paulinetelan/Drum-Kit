
// Detect mouse click
var buttons_array = document.querySelectorAll("button");
// Detect if keyboard key has been released yet
var pressed_keys = [];

for (var i = 0; i < buttons_array.length; i++) {
  document.querySelectorAll("button")[i].addEventListener("mousedown", function() {
    playSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
  document.querySelectorAll("button")[i].addEventListener("mouseup", function() {
    buttonAnimation(this.innerHTML);
  });
}

// Detect keyboard press
document.addEventListener("keydown", event => {
  if (pressed_keys.indexOf(event.key) > -1){
    console.log("key held down detected");
      }else{
    console.log("keydown of new key");
    pressed_keys.push(event.key);
    playSound(event.key);
    buttonAnimation(event.key);
  }
});

document.addEventListener("keyup", event => {
  console.log("keyup");
  pressed_keys = pressed_keys.filter(x => x != event.key);
  console.log(pressed_keys);
  buttonAnimation(event.key);
});


 // Functions
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

function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.toggle("pressed");
}
