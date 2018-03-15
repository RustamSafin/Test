<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Тест</title>
    <link rel="stylesheet" href="/main.css"/>
</head>
<body>

<div class="numbers">
<#assign r=0 w=0 i=rome?size+word?size>
<#list 0..i as number>
    <#if random.nextBoolean()>
        <#if r<rome?size>
            <h2 class="question rome">${rome[r]}</h2>
            <#assign r++>
        <#elseif w<word?size>
            <h2 class="question word">${word[w]}</h2>
            <#assign w++>
        </#if>
    <#else>
        <#if w<word?size>
            <h2 class="question word">${word[w]}</h2>
            <#assign w++>
        <#elseif r<rome?size>
            <h2 class="question rome">${rome[r]}</h2>
            <#assign r++>
        </#if>
    </#if>
</#list>
</div>
<div class="answ-blk">
    <h3>Выберите те числа, которые вы увидели выше</h3>
    <ul class="answers">
        <li class="answer" id="rome">I</li>
        <li class="answer" id="rome">II</li>
        <li class="answer" id="rome">III</li>
        <li class="answer" id="rome">IV</li>
        <li class="answer" id="rome">V</li>
        <li class="answer" id="rome">VI</li>
        <li class="answer" id="rome">VII</li>
        <li class="answer" id="rome">VIII</li>
        <li class="answer" id="rome">IX</li>
    </ul>
    <ul class="answers">
        <li class="answer" id="word">один</li>
        <li class="answer" id="word">два</li>
        <li class="answer" id="word">три</li>
        <li class="answer" id="word">четыре</li>
        <li class="answer" id="word">пять</li>
        <li class="answer" id="word">шесть</li>
        <li class="answer" id="word">семь</li>
        <li class="answer" id="word">восемь</li>
        <li class="answer" id="word">девять</li>
    </ul>
    <button class="btn" id="next">Дальше</button>
</div>


<div class="results"></div>
<script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
<script src="/main.js"></script>
</body>
</html>
