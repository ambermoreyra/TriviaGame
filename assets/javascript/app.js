//global variables
var finalScore = 0;
var possibleScore = 10;
var intervalId;
var time = 60;
// var audio = new Audio("takeMeOut.mp3");


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
$("#submit-results").hide();
$("#directions").html("<h5>Step up to the plate and take a swing at this baseball trivia! <br>Select the correct answer to see how many you can knock out of the park!</h5>")

$("#start").on("click", function () {
            $(".start").hide();
            $("#directions").hide();
            $("#quiz").show();
            $("#timer").show();
            $("#submit-results").show();
            // audio.play();

            run();

            function run() {
                intervalId = setInterval(decrement, 1000);
            }

            function decrement() {

                time--;

                $("#time-left").html("<h4>Time Remaining: </h4><br><h2>" + time + "</h2>");

                if (time === 0) {
                    clearInterval(intervalId);
                    $("#time-left").html("<h2>Time's Up!</h2>");
                    $("#quiz").hide();
                    $("#submit-results").hide();


                };
            }
        })

                $("#submit-results").on("click", function () {

                    $("#quiz").hide();
                    $("#timer").hide();
                    $("#submit-results").hide();
                    // audio.pause();


                    var radios = $('input[type="radio"]:checked');

                    radios.each(function (index, radio) {
                        var radioValue = parseInt(radio.value);
                        finalScore += radioValue;
                    });
                    var battingAverage = (parseInt(finalScore)/possibleScore).toFixed(3);
                    if (finalScore <= 3) {
                        $("#finalScore").html("<h4>Looks like a trade is in your future! <br><br>Batting Average: " + battingAverage);
                    } else if(finalScore >= 8) {
                        $("#finalScore").html("<h4>MVP status! <br><br>Batting Average: " + battingAverage);
                    }else {
                        $("#finalScore").html("<h4>Pack your bags! You're heading to the farm team for some practice! <br><br>Batting Average: " + battingAverage);

                    }
                })
            