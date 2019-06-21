$(document).ready(function () {
    $("#quiz").hide();
    $("#start").on("click", game);
});
var wrongArray;
function question1() {
    $("#question").text("Which of the following is the name of a Disney movie as well as the last name of the fastest man on Earth?");
    $("#first").text("A. Pocahontas").addClass("wrong");
    $("#second").text("B. Brave").addClass("wrong");
    $("#third").text("C. Bolt").addClass("right");
    $("#fourth").text("D. Aladdin").addClass("wrong");
    $(".wrong").on("click", function () { wrongAnswer(1) });
    $(".right").on("click", function () { rightAnswer(1) });
}

function wrongAnswer(num) {

    if (num == 1) {
        setTimeout(question2, 3000);
        $("#quiz").hide();
        $("#userResponse").text("Sorry, bud - that's not the right answer!")
        $("#rightAnswer").text("The correct answer is C, Bolt.");
        $("img").attr("src", "https://i.gifer.com/RU6Z.gif");
    }
    else if (num == 2) {

    }
    else if (num == 3) {

    }
    else {

    }
}

function rightAnswer(num) {
    if (num == 1) {
        setTimeout(question2, 3000);
        $("#quiz").hide();
        $("#userResponse").text("Great job, holmes - that's indeed the right answer!")
        $("#rightAnswer").empty();
        $("img").attr("src", "https://i.gifer.com/RU6Z.gif");
    }
    else if (num == 2) {

    }
    else if (num == 3) {

    }
    else {

    }
}

// $("#.wrong").on("click", wrongAnswer);
// $("#.right").on("click", rightAnswer);

function question2() {
    timer();
    $("#question").text("Which of the following countries recieves the most foreign aid from the US government?");
    $("#first").text("Afghanistan");
    $("#second").text("Israel");
    $("#third").text("Iraq");
    $("#fourth").text("Egypt");
    $("#results").hide();
    $("#quiz").show();
    $(".wrong").on("click", function () { wrongAnswer(2) });
    $(".right").on("click", function () { rightAnswer(2) });
}

function timeOut(num) {
    if (num == 1) {
        setTimeout(question2, 3000);
        $("#quiz").hide();
        $("#tooLate").text("Sorry, cat. You're a touch late there!");
        $("#rightAnswer").text("The right answer is C, Bolt.");
        $("img").attr("src", "https://i.gifer.com/RU6Z.gif");
    }
    else if (num == 2) {

    }
    else if (num == 3) {

    }
    else {

    }
}

function q1timeOut() {

}

var questionCounter = 0;
function timer() {
    questionCounter++;
    var timeLeft = 3;
    var elem = $("#timeRemaining");
    var timerId = setInterval(countdown, 1000);
    $("button").on("click", function () { clearInterval(timerId) });
    function countdown() {
        if (timeLeft == 0) {
            clearInterval(timerId);
            if (questionCounter == 1) {
                q1timeOut();
            }
            // else if (questionCounter == 2) {
            //     q1timeOut();
            // }

        } else {
            elem.text(timeLeft + " seconds remaining");
            timeLeft--;
        }
    }
}


function game() {
    $("#start").hide();
    question1();
    timer();
    $("#quiz").show();



    // var number = 4
    // var intervalId;
    // setInterval(decrement, 1000);

}

// function decrement() {
//     $("#timeRemaining").text(number);
//     //Decrease number by one.
//     number--;
//     //Once number hits zero...
//     if (number == 0) {
//         //  Alert the user that time is up.
//         alert("Time Up!");
//     }
// }