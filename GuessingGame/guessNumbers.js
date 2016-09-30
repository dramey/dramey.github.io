var guessOne;
var guessTwo;
var guessThree;

$(function () {
    
    var boxOneNumber = Math.floor((Math.random() * 9) + 0);
    var boxTwoNumber = Math.floor((Math.random() * 9) + 0);
    var boxThreeNumber = Math.floor((Math.random() * 9) + 0);


$(".checkValues").click(function(){ 
    checkGuessOne();
    checkGuessTwo();
    checkGuessThree();
  if(guessOne == guessTwo || guessOne == guessThree || guessTwo == guessThree){
  window.alert("All numbers must be different");  
}else{
    return;
}
});

$(".checkGuessOne").click(function () {
        guessOne = $("#guessOne").val();

if(guessOne == boxOneNumber){
     return $(".grayCard").css("background-color","green");
}else if(guessOne == boxTwoNumber){
    return $(".grayCard").css("background-color","yellow");
}else if(guessOne == boxThreeNumber){
    return $(".grayCard").css("background-color","yellow");
}else{
    return $(".grayCard").css("background-color","red");
}
});

$(".checkGuessTwo").click(function(){
        guessTwo = $("#guessTwo").val();

if(guessTwo == boxTwoNumber){
    return $(".peachCard").css("background-color","green");
}else if(guessTwo == boxOneNumber){
    return $(".peachCard").css("background-color","yellow");
}else if(guessTwo == boxThreeNumber){
    return $(".peachCard").css("background-color","yellow");
} else{
    return $(".peachCard").css("background-color","red");
}
});

$(".checkGuessThree").click(function(){
        guessThree = $("#guessThree").val();

if(guessThree == boxThreeNumber){
    return $(".grayCard2").css("background-color","green");
}else if(guessThree == boxOneNumber){
    return $(".grayCard2").css("background-color","yellow");
}else if(guessThree == boxTwoNumber){
    return $(".grayCard2").css("background-color","yellow");
}else{
    return $(".grayCard2").css("background-color","red");
}
});

$(".checkWin").click(function(){

if(guessOne == boxOneNumber && guessTwo == boxTwoNumber && guessThree == boxThreeNumber){
    window.alert("CONGRATULATIONS ..... YOU WIN!")
}else{
    var div = $("<div></div>");
                div.append("<h4>" + "The Number for Box One was: " + boxOneNumber + " " + " The Number for Box Two was: " + boxTwoNumber + " " + " The Number for Box Three was: " + boxThreeNumber + "</h4>")
                $(".showNumbers").append(div);
    
    };
});
});

function checkGuessOne() {
    guessOne = $("#guessOne").val();
    console.log(guessOne);
}

function checkGuessTwo() {
    guessTwo = $("#guessTwo").val();
    console.log(guessOne);
}

function checkGuessThree() {
    guessThree = $("#guessThree").val();
    console.log(guessOne);
}

$("#newGame").click(function () {
    location.reload();
});








