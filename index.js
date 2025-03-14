// function z
var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;
      sound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
});
}

document.addEventListener("keypress",function(event){
   //  var button=event;
   sound(event.key);
   buttonAnimation(event.key);
})

function sound(key){
   switch (key) {
      case "w": {
         var crash = new Audio("sounds/crash.mp3");
         crash.play();
         break;
      }
      case "a": {
         var kick_bass = new Audio("sounds/kick-bass.mp3");
         kick_bass.play();
      }
      case "s": {
         var snare = new Audio("sounds/snare.mp3");
         snare.play();
      }
      case "d": {
         var tom_1 = new Audio("sounds/tom-1.mp3");
         tom_1.play();
      }
      case "j": {
         var tom_2 = new Audio("sounds/tom-2.mp3");
         tom_2.play();
      }
      case "k": {
         var tom_3 = new Audio("sounds/tom-3.mp3");
         tom_3.play();
      }
      case "l": {
         var tom_4 = new Audio("sounds/tom-4.mp3");
         tom_4.play();
      }
      // default: alert("wrong button is pressed!!");
   }

}
function buttonAnimation(currentKey){
   var activeButton=document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
   setTimeout(()=>{
      activeButton.classList.remove("pressed");
   },100)
}
// var audio=new Audio("sounds/crash.mp3");
// audio.play();
