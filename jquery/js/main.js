
$(document).ready(function () {
    $("button").click(function () {
        $("div").animate({
            left: '100px',
            height: '100px',
            width: '100px',
        }, 3000)

        $("div").animate({
            "backgroundColor": 'blue'
        }, 5000, function () {
            $('div').html("<h2>Animacja zakończona</h2>").css({
                fontSize: '0.6em',
                color: 'white'
            })
        })
    });
});



// function () {
//     $('div').css("background-color", 'blue')
//     $('div').html("<h2>Animacja zakończona</h2>")
//     $('h2').css("display", "block")
// }).animate({
//     backgroundColor: 'blue'
// }, 5000);