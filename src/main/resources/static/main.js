$(document).ready(function () {
    $(".answer").click(function () {
        var numbers = document.getElementsByClassName("question");
        var answer = this.value;
        numbers.forEach(function (number) {
            if (number.value===answer) {

            }
        })
    })
});