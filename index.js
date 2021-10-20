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
        
        // Exercice : être bloquer sur la dernière slide quand on clique sur la flêche de droite
        // if (numArrow > 4){
        //     numArrow = 4
        // }

        // Bonus 1
        if (numArrow > 4){
            numArrow = 0
        }

            $(".slider").animate({
                left: `-${numArrow * 100}%`
            }, 1000)
    })

    // Slider entre les images grâce à la flêche gauche
    $(".left-arrow").click(function() {

        numArrow = numArrow - 1

        // Exercice : être bloquer sur la 1ère slide quand on clique sur la flêche de gauche
        if (numArrow < 0){
            numArrow = 0
        } 

        // Bonus 1
        if (numArrow < 0){
            numArrow = 4
        }

        $(".slider").animate({
                left: `-${numArrow *100}%`
        }, 1000)
    })

    // Bonus 2
    var count = 0

    setInterval(autoslide, 5000)
    
    function autoslide() {
        count = count - 1
        
        if (count === -5) {
            count = 0
        }
        if (count === 1) {
            count = -4
        }

        $(".slider").animate({
            left: `${count*100}%`
        })
    }

})