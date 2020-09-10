
var buttons_array = document.querySelectorAll("button");

for (var i=0; i < buttons_array.length; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function (){
    switch (buttonInnerHTML = this.innerHTML) {
      case "w":
        soundFile = "crash"
        break;
      case "a":
        soundFile = "kick-bass";
        break;
      case "s":
        soundFile = "snare";
        break;
      case "d":
        soundFile = "tom-1";
        break;
        case "j":
          soundFile = "tom-2";
          break;
        case "k":
          soundFile = "tom-3";
          break;
        case "l":
          soundFile = "tom-4";
          break;
      default:
        console.log("Button not found!");

    }


    audioObj = new Audio("sounds/"+ soundFile +".mp3");
    audioObj.play();
  });
}
