$(function(){

    // Slider entre les images grâce aux points
    $(".point").click(function() {
        var slideLeft = $(this).index() * 100
        console.log(slideLef)

            $(".slider").animate({
                left: `-${slideLeft}%`
            }, 3000)
    })

})