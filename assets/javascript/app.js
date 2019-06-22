$(document).ready(function () {
    $("#quiz").hide();
    $("#start").on("click", game);
});
var questionCounter = 0;

function wrongAnswer(num) {
    if (num === 1) {
        $("#quiz").hide();
        $("#userResponse").text("Sorry, bud - that's not the right answer!")
        $("#rightAnswer").text("The correct answer is C, Bolt.");
        $("img").attr("src", "https://i.gifer.com/RU6Z.gif");
        setTimeout(question2, 3000);
    }
    if (num === 2) {
        setTimeout(question3, 3000);
        $("#quiz").hide();
        $("#userResponse").text("Sorry, bud - that's not the right answer!")
        $("#rightAnswer").text("The correct answer is B, Iraq.");
        $("img").attr("src", "https://media.giphy.com/media/3o6gDWzmAzrpi5DQU8/giphy.gif");
        $("#results").show();
    }
    if (num == 3) {
        setTimeout(question4, 3000);
        $("#quiz").hide();
        $("#userResponse").text("Sorry, bud - that's not the right answer!")
        $("#rightAnswer").text("The correct answer is D, Heath Ledger.");
        $("img").attr("src", "https://media.giphy.com/media/tN2OR1R1BLKV2/giphy.gif");
        $("#results").show();
    }
    if (num == 4) {
        // clearTimeout(timeout);
        console.log("inside wrong answer 4");
        $("#quiz").hide();
        $("#userResponse").text("Sorry, bud - that's not the right answer!")
        $("#rightAnswer").text("The correct answer is A, Finland.");
        $("img").attr("src", "https://www.fg-a.com/flags/animated-finnish-flag-2.gif");
        $("#results").show();
    }
}

function rightAnswer(num) {
    if (num == 1) {
        setTimeout(question2, 3000);
        $("#quiz").hide();
        $("#userResponse").text("Great job, holmes - that's indeed the right answer!")
        $("#rightAnswer").empty();
        $("img").attr("src", "https://thumbs.gfycat.com/LastingPessimisticGemsbuck-size_restricted.gif");
        $("#results").show();
    }
    else if (num == 2) {
        setTimeout(question3, 3000);
        $("#quiz").hide();
        $("#userResponse").text("Great job, holmes - that's indeed the right answer!")
        $("#rightAnswer").empty();
        $("img").attr("src", "https://media.giphy.com/media/KJg6Znn4V1Jcs/giphy.gif");
        $("#results").show();
    }
    else if (num == 3) {
        setTimeout(question4, 3000);
        $("#quiz").hide();
        $("#userResponse").text("Great job, holmes - that's indeed the right answer!")
        $("#rightAnswer").empty();
        $("img").attr("src", "https://media.giphy.com/media/AwoDg0wJImOjK/giphy.gif");
        $("#results").show();
    }
    else if (num == 4) {
        $("#quiz").hide();
        $("#userResponse").text("Great job, holmes - that's indeed the right answer!")
        $("#rightAnswer").empty();
        $("img").attr("src", "https://media.giphy.com/media/ZsvB0IM9s5SE/giphy.gif");
        $("#results").show();
    }
}

function question1() {
    $("#question").text("Which of the following is the name of a Disney movie as well as the last name of the fastest man on Earth?");
    $("#first").text("A. Pocahontas").addClass("wrong");
    $("#second").text("B. Brave").addClass("wrong");
    $("#third").text("C. Bolt").addClass("right");
    $("#fourth").text("D. Aladdin").addClass("wrong");
    $(".wrong").on("click", () => { wrongAnswer(1) });
    $(".right").on("click", () => { rightAnswer(1) });
}

function question2() {
    timer();
    $("#question").text("Which of the following countries recieves the most foreign aid from the US government?");
    $("#first").text("A. Afghanistan").addClass("wrong");
    $("#second").text("B. Iraq").addClass("right");
    $("#third").text("C. Israel").addClass("wrong");
    $("#fourth").text("D. Egypt").addClass("wrong");
    $("#results").hide();
    $("#quiz").show();
    $(".wrong").on("click", () => { wrongAnswer(2) });
    $(".right").on("click", function () { rightAnswer(2) });

}

function question3() {
    timer();
    $("#question").text("Which of the following method actors is known for immersing themselves fully into their character, and has died as a result?");
    $("#first").text("A. Paul Walker").addClass("wrong");
    $("#second").text("B. Christian Bale").addClass("wrong");
    $("#third").text("C. Jared Leto").addClass("wrong");
    $("#fourth").text("D. Heath Ledger").addClass("right");
    $("#results").hide();
    $("#quiz").show();
    $(".wrong").on("click", function () { wrongAnswer(3) });
    $(".right").on("click", function () { rightAnswer(3) });
}

function question4() {
    $("#question").text("Which of the following countries is considered the 'happiest' by most estimates?");
    $("#first").text("A. Finland").addClass("right");
    $("#second").text("B. Denmark").addClass("wrong");
    $("#third").text("C. Norway").addClass("wrong");
    $("#fourth").text("D. Iceland").addClass("wrong");
    $("#results").hide();
    $("#quiz").show();
    $(".wrong").on("click", function () { wrongAnswer(4) });
    $(".right").on("click", function () { rightAnswer(4) });
}

function timeOut(num) {
    if (num == 1) {
        setTimeout(question2, 3000);
        $("#quiz").hide();
        $("#userResponse").empty();
        $("#tooLate").text("Sorry, cat. You're a touch late there!");
        $("#rightAnswer").text("The right answer is C, Bolt.");
        $("img").attr("src", "https://i.gifer.com/RU6Z.gif");
    }
    else if (num == 2) {
        setTimeout(question3, 3000);
        $("#quiz").hide();
        $("#userResponse").empty();
        $("#tooLate").text("Sorry, cat. You're a touch late there!");
        $("#rightAnswer").text("The right answer is B, Iraq.");
        $("img").attr("src", "https://media.giphy.com/media/3o6gDWzmAzrpi5DQU8/giphy.gif");
        $("#results").show();
    }
    else if (num == 3) {
        setTimeout(question4, 3000);
        $("#quiz").hide();
        $("#userResponse").empty();
        $("#tooLate").text("Sorry, cat. You're a touch late there!");
        $("#rightAnswer").text("The right answer is D, Heath Ledger.");
        $("img").attr("src", "https://media.giphy.com/media/tN2OR1R1BLKV2/giphy.gif");
        $("#results").show();
    }
    else if (num == 4) {
        console.log("question 4 timeout!")
        $("#quiz").hide();
        $("#userResponse").empty();
        $("#tooLate").text("Sorry, cat. You're a touch late there!");
        $("#rightAnswer").text("The right answer is A, Finland.");
        $("img").attr("src", "https://www.fg-a.com/flags/animated-finnish-flag-2.gif");
        $("#results").show();
    }
}

function timer() {
    questionCounter++;
    var timeLeft = 4;
    var elem = $("#timeRemaining");
    timerId = setInterval(countdown, 1000);
    $("button").on("click", function () { clearInterval(timerId) });
    function countdown() {
        if (timeLeft == 0) {
            clearInterval(timerId);
            timeOut(questionCounter);
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

}