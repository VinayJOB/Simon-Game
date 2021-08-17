
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];           //["green","blue"]

var started = 0;   // = 1
var level = 0;
var userClickedPattern=[];  //["green"]
//detecting whenever key pressed
$(document).on("keypress",function(event){              //clicked on key
  if(started==0){
  nextSequence();                                       //2 green
  started=1;
  }
});

$(".btn").on("click",function(){
    var userChosenColour= $(this).attr("id");             //green
    userClickedPattern.push(userChosenColour);            //["green"]
    checkAnswer(userClickedPattern.length-1);             //checkAnswer(0)
    playSound(userChosenColour);
    animatePress(userChosenColour);
    $("#"+userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  });

function checkAnswer(currentLevel){                     //checkAnswer(0)
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {           //gamePattern[0]===userClickedPattern[0]
        if (userClickedPattern.length === gamePattern.length){                        //==green              //green
          setTimeout(function () {
              nextSequence();
            }, 1000);
        }
  
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      setTimeout(function(){$("body").removeClass("game-over")},200);
      $("h1").text("Game Over, Press Any Key to Restart");
      startOver();
    }
  }
//creating function for computer random number generating
function nextSequence() {
  userClickedPattern = [];
  level++;                                                        // 2
  $("#level-title").text("Level " + level);                       
  var randomNumber = Math.floor(Math.random() * 4);               // 1
  var randomChosenColour = buttonColours[randomNumber];           // green,blue
  gamePattern.push(randomChosenColour);                           //gamePattern["green","blue"]

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}
// main function for user click 

  function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
  }

  function animatePress(currentColour){
    $("#"+ currentColour).addClass("pressed");
    setTimeout(function(){ $("#"+ currentColour).removeClass("pressed")},100);
  }



function startOver(){
  var level = 0;
  var gamePattern=[];
  var started= 0;
}