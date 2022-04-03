// alert("tersting js!");
// Clean Code
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
  checkAnswer(userClickedPattern.length-1);
});


//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {
        playSound("wrong");
        console.log("wrong");
        $('body').addClass("game-over")
            setTimeout(function(){
                $('body').removeClass("game-over");
            }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }

}
function startOver(){
    level = 0;
    started = false;
    gamePattern = [];
}

function nextSequence() {

  //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


// previous code

// var userClickedPattern = [];
// var buttonColors = ["red","blue","green","yellow"];
// var gamePattern = [];
// var level = 0;


// function nextSequence(){
//     document.querySelector("h1").innerHTML = ("LEVEL - " + level);
//     var randomNumber = Math.floor(Math.random()*4);
//     console.log(randomNumber);
//     var randomChosenColor = buttonColors[randomNumber];
//     gamePattern.push(randomChosenColor);
//     playSound(randomChosenColor);
//     $('#' + gamePattern[0]).fadeOut(100).fadeIn(100);
//     level++;
//     userClickedPattern = [];
// }
// var i = 0;
// document.addEventListener("keypress", function(event) {
//     if (i < 1){
//         nextSequence();
//         i++;
//     }});

// function checkAnswer(currentLevel){
//     if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
//         console.log("Success")
//         setTimeout(function(){
//             nextSequence();
//         },1000);
//     } else {
//         console.log("Wrong");
//         playSound(wrong);
//     }}

// console.log(gamePattern);

// function playSound(name){
//     var audio = new Audio("sounds/" + name + ".mp3");
//     console.log(audio);
//     audio.play();
// }

// function animatePress(currentColor){
//     var shadow = $('.' + currentColor);
//     shadow.addClass('pressed');
//         setTimeout(function(){
//             $('.' + currentColor).removeClass("pressed");
//         },100);
// }

// $(document).ready(function(){
//     $('.btn').click(function(){
//         var userChosenColor = $(this).attr("id");
//         userClickedPattern.push(userChosenColor);
//         console.log(userChosenColor);
//         console.log(userClickedPattern);
//         playSound(userChosenColor);
//         animatePress(userChosenColor);
//         checkAnswer(userClickedPattern.length-1);
//     });
// });
