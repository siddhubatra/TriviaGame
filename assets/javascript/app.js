$(document).ready(function () {
    $("#quiz").hide();
    $("#start").on("click", game);
});
var questionCounter = 0;

function wrongAnswer(num) {
    if (num == 1) {
        setTimeout(question2, 3000);
        $("#quiz").hide();
        $("#userResponse").text("Sorry, bud - that's not the right answer!")
        $("#rightAnswer").text("The correct answer is C, Bolt.");
        $("img").attr("src", "https://i.gifer.com/RU6Z.gif");
    }
    else if (num == 2) {
        setTimeout(question2, 3000);
        $("#quiz").hide();
        $("#userResponse").text("Sorry, bud - that's not the right answer!")
        $("#rightAnswer").text("The correct answer is C, Bolt.");
        $("img").attr("src", "https://i.gifer.com/RU6Z.gif");
    }
    else if (num == 3) {
        setTimeout(question2, 3000);
        $("#quiz").hide();
        $("#userResponse").text("Sorry, bud - that's not the right answer!")
        $("#rightAnswer").text("The correct answer is C, Bolt.");
        $("img").attr("src", "https://i.gifer.com/RU6Z.gif");
    }
    else {
        $("#quiz").hide();
        $("#userResponse").text("Sorry, bud - that's not the right answer!")
        $("#rightAnswer").text("The correct answer is C, Bolt.");
        $("img").attr("src", "https://i.gifer.com/RU6Z.gif");
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
        setTimeout(question3, 3000);
        $("#quiz").hide();
        $("#userResponse").text("Great job, holmes - that's indeed the right answer!")
        $("#rightAnswer").empty();
        $("img").attr("src", "https://media.giphy.com/media/3o6gDWzmAzrpi5DQU8/giphy.gif");
    }
    else if (num == 3) {
        setTimeout(question4, 3000);
        $("#quiz").hide();
        $("#userResponse").text("Great job, holmes - that's indeed the right answer!")
        $("#rightAnswer").empty();
        $("img").attr("src", "https://i.gifer.com/RU6Z.gif");
    }
    else {
        $("#quiz").hide();
        $("#userResponse").text("Great job, holmes - that's indeed the right answer!")
        $("#rightAnswer").empty();
        $("img").attr("src", "https://i.gifer.com/RU6Z.gif");
    }
}

function question1() {
    $("#question").text("Which of the following is the name of a Disney movie as well as the last name of the fastest man on Earth?");
    $("#first").text("A. Pocahontas").addClass("wrong");
    $("#second").text("B. Brave").addClass("wrong");
    $("#third").text("C. Bolt").addClass("right");
    $("#fourth").text("D. Aladdin").addClass("wrong");
    $(".wrong").on("click", function () { wrongAnswer(1) });
    $(".right").on("click", function () { rightAnswer(1) });
}

function question2() {
    $("#question").text("Which of the following countries recieves the most foreign aid from the US government?");
    $("#first").text("A. Afghanistan").addClass("wrong");
    $("#second").text("B. Iraq").addClass("right");
    $("#third").text("C. Israel").addClass("wrong");
    $("#fourth").text("D. Egypt").addClass("wrong");
    $("#results").hide();
    $("#quiz").show();
    $(".wrong").on("click", function () { wrongAnswer(2) });
    $(".right").on("click", function () { rightAnswer(2) });
    timer();
}

function question3() {
    timer();
    $("#question").text("Which of the following method actors is known for immersing themselves fully into their character, and has died as a result?");
    $("#first").text("A. Paul").addClass("wrong");
    $("#second").text("B. Christian Bale").addClass("wrong");
    $("#third").text("C. Dakota Fanning").addClass("wrong");
    $("#fourth").text("D. Heath Leager").addClass("right");
    $("#results").hide();
    $("#quiz").show();
    $(".wrong").on("click", function () { wrongAnswer(2) });
    $(".right").on("click", function () { rightAnswer(2) });
}

function question4() {
    timer();
    $("#question").text("Which of the following countries is considered the 'happiest' by most estimates?");
    $("#first").text("A. Bhutan").addClass("right");
    $("#second").text("B. China").addClass("wrong");
    $("#third").text("C. USA").addClass("wrong");
    $("#fourth").text("D. Australia").addClass("wrong");
    $("#results").hide();
    $("#quiz").show();
    $(".wrong").on("click", function () { wrongAnswer(2) });
    $(".right").on("click", function () { rightAnswer(2) });
}

function timeOut(num) {
    if (num == 1) {
        console.log("question 1 timeout!")
        setTimeout(question2, 3000);
        $("#quiz").hide();
        $("#tooLate").text("Sorry, cat. You're a touch late there!");
        $("#rightAnswer").text("The right answer is C, Bolt.");
        $("img").attr("src", "https://i.gifer.com/RU6Z.gif");
    }
    else if (num == 2) {
        console.log("question 2 timeout!")
        setTimeout(question3, 3000);
        $("#quiz").hide();
        $("#tooLate").text("Sorry, cat. You're a touch late there!");
        $("#rightAnswer").text("The right answer is B, Iraq.");
        $("img").attr("src", "https://i.gifer.com/RU6Z.gif");
        $("#results").show();
    }
    else if (num == 3) {
        setTimeout(question4, 3000);
        $("#quiz").hide();
        $("#tooLate").text("Sorry, cat. You're a touch late there!");
        $("#rightAnswer").text("The right answer is C, Bolt.");
        $("img").attr("src", "https://i.gifer.com/RU6Z.gif");
        $("#results").show();
    }
    else {
        $("#quiz").hide();
        $("#tooLate").text("Sorry, cat. You're a touch late there!");
        $("#rightAnswer").text("The right answer is C, Bolt.");
        $("img").attr("src", "https://i.gifer.com/RU6Z.gif");
        $("#results").show();
    }
}

function timer() {
    questionCounter++;
    var timeLeft = 30;
    var elem = $("#timeRemaining");
    var timerId = setInterval(countdown, 1000);
    $("button").on("click", function () { clearInterval(timerId) });
    function countdown() {
        if (timeLeft == 0) {
            clearInterval(timerId);
            timeOut(questionCounter);
        } else {
            elem.text(timeLeft + " seconds remaining");
            console.log("timeLeft is!!!!!!!!", timeLeft);
            timeLeft--;
        }
    }
}

function game() {
    $("#start").hide();
    question1();
    timer();
    $("#quiz").show();

}