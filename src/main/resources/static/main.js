
$(document).ready(function () {
    var x=Math.round(0xffffff * Math.random()).toString(16);
    var y=(6-x.length);
    var z="000000";
    var z1 = z.substring(0,y);
    var color= "#" + z1 + x;
    $(".question").css('color',color);
    setTimeout(function() {
            $(".numbers").hide()
    }, 5000);



    if (sessionStorage.getItem('countRome')!=null) {
        sessionStorage.setItem('countRome', document.getElementsByClassName("rome").length+parseInt(sessionStorage.getItem('countRome')));
    } else {
        sessionStorage.setItem('countRome', parseInt(document.getElementsByClassName("rome").length));
    }
    if (sessionStorage.getItem('countWord') !=null) {
        sessionStorage.setItem('countWord', document.getElementsByClassName("word").length+parseInt(sessionStorage.getItem('countWord')));
    } else {
        sessionStorage.setItem('countWord', parseInt(document.getElementsByClassName("word").length));

    }

    $(".answer").click(function () {
        //нет проверки на то, что если выбрал все правильные варианты
        if (!$(this).hasClass("used")) {
            if (sessionStorage.getItem('correctRome')!=null) {
                var correctRome = parseInt(sessionStorage.getItem('correctRome'));
            } else {
                var correctRome =0;
            }
            if (sessionStorage.getItem('correctWord') !=null) {
                var correctWord = parseInt(sessionStorage.getItem('correctWord'));
            } else {
                var correctWord=0;
            }

            var numbers = document.getElementsByClassName("question");
            var answer = this;

            var k = 0;
            for (var i = 0; i < numbers.length; i++) {
                if (numbers[i].textContent === answer.textContent) {
                    $(answer).css('color', 'green').addClass("used");
                    if (answer.id ==="rome") {
                        correctRome+=1;
                        sessionStorage.setItem('correctRome',correctRome);
                    } else {
                        correctWord+=1;
                        sessionStorage.setItem('correctWord',correctWord );
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
    if (sessionStorage.getItem('round')===5) {
        $('#next').text("Закончить");
    }


    $("#next").click(function () {
        var round = sessionStorage.getItem("rr");
        if (round === null){
            sessionStorage.setItem("rr", 1);
        }else {
            round = parseInt(sessionStorage.getItem("rr"));
            round+=1;
            sessionStorage.setItem("rr", round);
        }
        round = parseInt(sessionStorage.getItem("rr"));
        alert(round);
        if (round <= 3) {
            window.location.replace("/start");
        }
        if (round === 5){
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
                    $(".results").text(data).show();
                }
            });
            alert(
                "Rome count: "+sessionStorage.getItem('countRome')+"\n"+
                "Rome correct: "+sessionStorage.getItem('correctRome')+"\n"+
                "Word count: "+sessionStorage.getItem('countWord')+"\n"+
                "Word correct: "+sessionStorage.getItem("correctWord")+"\n"
            );
            window.location.replace("/");
        }
    })
});



