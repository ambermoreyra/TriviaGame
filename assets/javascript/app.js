//global variables
//# correct
//# incorrect
//time
//value of checked answer for each question (for each) if value = 1, corrrect ++/10
var questions = ["42", "hr", "pitch", "football", "mascot", "fame", "criminal", "baseballs", "announcer", "rookie"];
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

// console.log($('.demo:selected').val());  

// $('.42').click(function() {
//     if($('.42').is(':checked')) { console.log(val())}
//  });

// for (var i = 0; i < questions.length; i++) {
//         var radioValue = $("input[name='42']:checked").val();
//         console.log(radioValue);
// }


// var question1 = $('input[name="42"]');

// question1.change(function() {
//     var chosen = question1.filter(':checked');
//     console.log(question1.val());

//   });

// $(document).ready(function() {
//     var radios = $('input[name="42"]');
//     radios.change(function() {
//         var filtered = radios.filter(function() {
//             return this.checked;
//         })
//     });
//     // console.log(filtered.val());
// })



function submit() {
    var radios = $('input[type="radio"]:checked');
    var finalScore = 0;
    var possibleScore = 58372;
    
    radios.each(function(index, radio) {
        var radioValue = parseInt(radio.value);
        finalScore += radioValue;
    });

    $('#finalScore').text(finalScore + '/' + possibleScore);
}