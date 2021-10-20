$(function(){

    // Slider entre les images grâce aux points
    $(".point").click(function() {
        var slideLeft = $(this).index() * 100
        console.log(slideLeft)

            $(".slider").animate({
                left: `-${slideLeft}%`
            }, 1000)
    })

    // Slider entre les images grâce à la flêche droite
    var numArrow = 0
    $(".right-arrow").click(function() {
        
        numArrow = numArrow + 1
        
        if (numArrow > 4){
            numArrow = 4
        }

            $(".slider").animate({
                left: `-${numArrow * 100}%`
            }, 1000)
    })

    // Slider entre les images grâce à la flêche gauche
    $(".left-arrow").click(function() {

        numArrow = numArrow - 1

        if (numArrow < 0){
            numArrow = 0
        }

        $(".slider").animate({
                left: `-${numArrow *100}%`
        }, 1000)
    })
})