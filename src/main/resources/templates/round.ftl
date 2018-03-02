<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Тест</title>
</head>
<body>
    <div class="numbers">
        <#assign r=0 w=0 i=rome?size+word?size>
            <#list 0..i as number>
                <#if random.nextBoolean()>
                    <#if r<rome?size>
                        <div class="question rome">${rome[r]}</div>
                        <#assign r++>
                    <#elseif w<word?size>
                        <div class="question word">${word[w]}</div>
                        <#assign w++>
                    </#if>
                <#else>
                    <#if w<word?size>
                        <div class="question word">${word[w]}</div>
                        <#assign w++>
                    <#elseif r<rome?size>
                        <div class="question rome">${rome[r]}</div>
                        <#assign r++>
                    </#if>
                </#if>
            </#list>
    </div>
<br>
<h3>Выберите те числа, которые вы увидели выше</h3>
<h5 class="answer" id="rome">I</h5>
<h5 class="answer" id="rome">II</h5>
<h5 class="answer" id="rome">III</h5>
<h5 class="answer" id="rome">IV</h5 >
<h5 class="answer" id="rome">V</h5>
<h5 class="answer" id="rome">VI</h5 >
<h5 class="answer" id="rome">VII</h5 >
<h5 class="answer" id="rome">VIII</h5>
<h5 class="answer" id="rome">IX</h5>
<h5 class="answer" id="word">один</h5>
<h5 class="answer" id="word">два</h5>
<h5 class="answer" id="word">три</h5>
<h5 class="answer" id="word">четыре</h5>
<h5 class="answer" id="word">пять</h5>
<h5 class="answer" id="word">шесть</h5>
<h5 class="answer" id="word">семь</h5>
<h5 class="answer" id="word">восемь</h5>
<h5 class="answer" id="word">девять</h5>


<button id="next">Дальше</button>
    <div class="results" hidden></div>
<script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
<script src="/main.js"></script>
</body>
</html>
