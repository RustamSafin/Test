<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Тест</title>
</head>
<body>
    <#assign r=0 w=0 i=rome?size+word?size>
        <#list 0..i as number>
            <#if random.nextBoolean()>
                <#if r<rome?size>
                    <div class="question" id="rome">${rome[r]}</div>
                    <#assign r++>
                <#elseif w<word?size>
                    <div class="question" id="word">${word[w]}</div>
                    <#assign w++>
                </#if>
            <#else>
                <#if w<word?size>
                    <div class="question" id="word">${word[w]}</div>
                    <#assign w++>
                <#elseif r<rome?size>
                    <div class="question" id="rome">${rome[r]}</div>
                    <#assign r++>
                </#if>
            </#if>
        </#list>
    <br>
    <h3>Выберите те числа, которые вы увидели выше</h3>
    <a href="#" class="answer">I</a>
    <a href="#" class="answer">II</a>
    <a href="#" class="answer">III</a>
    <a href="#" class="answer">IV</a>
    <a href="#" class="answer">V</a>
    <a href="#" class="answer">VI</a>
    <a href="#" class="answer">VII</a>
    <a href="#" class="answer">VIII</a>
    <a href="#" class="answer">IX</a>
    <a href="#" class="answer">один</a>
    <a href="#" class="answer">два</a>
    <a href="#" class="answer">три</a>
    <a href="#" class="answer">четыре</a>
    <a href="#" class="answer">пять</a>
    <a href="#" class="answer">шесть</a>
    <a href="#" class="answer">семь</a>
    <a href="#" class="answer">восемь</a>
    <a href="#" class="answer">девять</a>


<button id="next">Дальше</button>
</body>
<script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
<script src="/main.js" type="text/javascript"></script>
</html>
