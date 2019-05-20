var finalScore = 0;
var possibleScore = 10;
var intervalId;

$("#directions").html("<h5>Step up to the plate and take a swing at this baseball trivia. <br>Select the correct answer to see how many you can knock out of the park.<br><br>Beware! Bad weather is about two minutes out!</h5>");

reset();

function reset() {
    $("#timer").hide();
    $("#quiz").hide();
    $("#submit-results").hide();
    $("#finalScore").hide();
    $("#playBall").hide();
    $("#directions").show();
    $("#start").show();

    $(':checked').each(function () {
        $(this).removeAttr('checked');
        $('input[type="radio"]').prop('checked', false);
    })

}

$("#start").on("click", function () {
    $("#start").hide();
    $("#directions").hide();
    $("#quiz").show();
    $("#timer").show();
    $("#submit-results").show();
    $("#time-left").empty();
    finalScore = 0;
    var time = 30;

    $('input:checked').removeAttr('checked');

    run();

    function run() {
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

        time--;

        $("#time-left").html("<h4>Time Remaining: </h4><br><h2>" + time + "</h2>");

        if (time === 0) {
            clearInterval(intervalId);
            $("#time-left").html("<h2>Rain delay!</h2>");
            $("#quiz").hide();
            $("#submit-results").hide();
            $("#playBall").show();
        }
    }
})

$("#submit-results").on("click", function () {
    $("#quiz").hide();
    $("#timer").hide();
    $("#submit-results").hide();
    $("#playBall").show();
    $("#finalScore").show();
    clearInterval(intervalId);

    var radios = $('input[type="radio"]:checked');

    radios.each(function (index, radio) {
        var radioValue = parseInt(radio.value);
        finalScore += radioValue;
    })

    var battingAverage = (parseInt(finalScore) / possibleScore).toFixed(3);

    if (finalScore <= 3) {
        $("#finalScore").html("<h4>Looks like a trade is in your future! <br><br>Batting Average: " + battingAverage);
    } else if (finalScore >= 7) {
        $("#finalScore").html("<h4>MVP status! <br><br>Batting Average: " + battingAverage);
    } else {
        $("#finalScore").html("<h4>Pack your bags! You're heading to the farm team for some practice! <br><br>Batting Average: " + battingAverage);
    }
})

$("#playBall").on("click", function () {
    reset();
})