$(document).ready(function () {
    var x = Math.round(0xffffff * Math.random()).toString(16);
    var y = (6 - x.length);
    var z = "000000";
    var z1 = z.substring(0, y);
    var color = "#" + z1 + x;
    $(".question").css('color', color);
    setTimeout(function () {
        $(".numbers").addClass("hidden")
    }, 3000);

    if (sessionStorage.getItem("rr") >= 5) {
        sessionStorage.setItem("rr", 1);
    }

    if (sessionStorage.getItem('countRome') != null) {
        sessionStorage.setItem('countRome', document.getElementsByClassName("rome").length + parseInt(sessionStorage.getItem('countRome')));
    } else {
        sessionStorage.setItem('countRome', parseInt(document.getElementsByClassName("rome").length));
    }
    if (sessionStorage.getItem('countWord') != null) {
        sessionStorage.setItem('countWord', document.getElementsByClassName("word").length + parseInt(sessionStorage.getItem('countWord')));
    } else {
        sessionStorage.setItem('countWord', parseInt(document.getElementsByClassName("word").length));

    }

    $(".answer").click(function () {
        //нет проверки на то, что если выбрал все правильные варианты
        if (!$(this).hasClass("used")) {
            if (sessionStorage.getItem('correctRome') != null) {
                var correctRome = parseInt(sessionStorage.getItem('correctRome'));
            } else {
                var correctRome = 0;
            }
            if (sessionStorage.getItem('correctWord') != null) {
                var correctWord = parseInt(sessionStorage.getItem('correctWord'));
            } else {
                var correctWord = 0;
            }

            var numbers = document.getElementsByClassName("question");
            var answer = this;

            var k = 0;
            for (var i = 0; i < numbers.length; i++) {
                if (numbers[i].textContent === answer.textContent) {
                    $(answer).css('color', 'green').addClass("used");
                    if (answer.id === "rome") {
                        correctRome += 1;
                        sessionStorage.setItem('correctRome', correctRome);
                    } else {
                        correctWord += 1;
                        sessionStorage.setItem('correctWord', correctWord);
                    }
                    k++;
                }
            }
            if (k === 0) {
                $('.answer').addClass('used');
                $(this).css('color', 'red');
            }

        }

    });
    if (sessionStorage.getItem('round') === 5) {
        $('#next').text("Закончить");
    }


    $("#next").click(function () {
        var round;
        if (sessionStorage.getItem("rr") === null) {
            sessionStorage.setItem("rr", 1);
        }
        round = parseInt(sessionStorage.getItem("rr"));
        round += 1;
        sessionStorage.setItem("rr", round);
        round = parseInt(sessionStorage.getItem("rr"));
        if (round !== 5) {
            alert("Раунд № " + round);
        }

        if (round <= 4) {
            window.location.replace("/start");
        }
        if (round === 5) {
            $.ajax({
                url: '/finish',
                method: 'post',
                data: {
                    countRome: sessionStorage.getItem('countRome'),
                    countWord: sessionStorage.getItem('countWord'),
                    correctRome: sessionStorage.getItem('correctRome'),
                    correctWord: sessionStorage.getItem('correctWord')
                },
                success: function (data) {
                    $(".results").addClass("active");
                    $(".results").html("Rome count: " + sessionStorage.getItem('countRome') + "<br/>" +
                        "Rome correct: " + sessionStorage.getItem('correctRome') + "<br/>" +
                        "Word count: " + sessionStorage.getItem('countWord') + "<br/>" +
                        "Word correct: " + sessionStorage.getItem("correctWord") + "<br/>");
                }
            });
            /*alert(
                "Rome count: " + sessionStorage.getItem('countRome') + "\n" +
                "Rome correct: " + sessionStorage.getItem('correctRome') + "\n" +
                "Word count: " + sessionStorage.getItem('countWord') + "\n" +
                "Word correct: " + sessionStorage.getItem("correctWord") + "\n"
            );*/
            setTimeout(function () {
                window.location.replace("/");
                sessionStorage.setItem("rr", 1);
                sessionStorage.setItem('countRome', 0);
                sessionStorage.setItem('countWord', 0);
                sessionStorage.setItem('correctRome', 0);
                sessionStorage.setItem('correctWord', 0);
            }, 2000);

        }
    })
});



