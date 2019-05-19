//global variables
var finalScore = 0;
var possibleScore = 10;
var intervalId;
var time = 20;

//time
//value of checked answer for each question (for each) if value = 1, corrrect ++/10
//functions
//timer (count down, if = 0, show results)
//show results click function (submit )
    //hit submit button
    //stop timer
    //clear form div
    //create results div

//start click function (start)
    //start timer function
    //hide start button
    //show submit button
//

//create start button that triggers start of timer
//if timer = 0, the game ends and calculates/displays # correct

//user chooses answers to ten questions
//user clicks submit
//correct and incorrect answers are calculated and displayed
$("#timer").hide();
$("#quiz").hide();
$("#results").hide();

$("#start").on("click", function() {
    $("#start").hide();
    $("#quiz").show();
    $("#timer").show();
    
    function run() {
        intervalId = setInterval(decrement, 1000);
      }
  
      function decrement() {
  
        time--;
  
        $("#time-left").html("<h2>" + time + "</h2>");
  
        if (time === 0) {
  
          stop();
        }
      }

      run();
});

$("#submit-results").on("click", function stop(){

    //stop timer
    //clear form div

    var radios = $('input[type="radio"]:checked');
       
    radios.each(function(index, radio) {
        var radioValue = parseInt(radio.value);
        finalScore += radioValue;
    });

    $('#finalScore').text(finalScore + '/' + possibleScore);
})