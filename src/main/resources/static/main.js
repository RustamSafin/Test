
$(document).ready(function () {
    var x=Math.round(0xffffff * Math.random()).toString(16);
    var y=(6-x.length);
    var z="000000";
    var z1 = z.substring(0,y);
    var color= "#" + z1 + x;
    $(".question").css('color',color);
    setTimeout(function() {
            $(".numbers").hide()
    }, 3000);



    if (sessionStorage.getItem('countRome')!=null) {
        sessionStorage.setItem('countRome', document.getElementsByClassName("rome").length+sessionStorage.getItem('countRome'));
    } else {
        sessionStorage.setItem('countRome', document.getElementsByClassName("rome").length);
    }
    if (sessionStorage.getItem('countWord') !=null) {
        sessionStorage.setItem('countWord', document.getElementsByClassName("word").length+sessionStorage.getItem('countWord'));
    } else {
        sessionStorage.setItem('countWord', document.getElementsByClassName("word").length);

    }

    $(".answer").click(function () {
        //нет проверки на то, что если выбрал все правильные варианты
        if (!$(this).hasClass("used")) {
            if (sessionStorage.getItem('correctRome')!=null) {
                var correctRome = sessionStorage.getItem('correctRome');
            } else {
                var correctRome =0;
            }
            if (sessionStorage.getItem('correctWord') !=null) {
                var correctWord = sessionStorage.getItem('correctWord');
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
                        sessionStorage.setItem('correctRome', correctRome++);
                    } else {
                        sessionStorage.setItem('correctWord', correctWord++);
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

    alert(sessionStorage.getItem('round'));

    $("#next").click(function () {
        var round =sessionStorage.getItem('round');

        //не уверен в if
        if (round===null) {
            round=1;
            sessionStorage.setItem('round',round);
        }
        if (round!==2) {
            sessionStorage.setItem('round',round++);
            window.location.replace("/start");
        } else {
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
            })
        }
    })
});



