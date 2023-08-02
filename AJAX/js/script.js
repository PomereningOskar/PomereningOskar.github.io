$(document).ready(function () {
    $("#pobierz-dane").click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            let dane = "imię: " + data.imie + "<br>" + "nazwisko:" + data.nazwisko + "<br>" + "zawód: " + data.zawod + "<br>" + "firma: " + data.firma + "<br>"

            let container = $("#dane-programisty")
            container.append(dane)
        })
    })
})

