$(function(){

    var indexGlobal = 0

    // Slider entre les images grâce aux points
    $(".point").click(function() {
        indexGlobal = $(this).index()
        var slideLeft = indexGlobal * 100
        console.log(slideLeft)

            $(".slider").animate({
                left: `-${slideLeft}%`
            }, 1000)

            clearInterval(interval)
            interval = setInterval(autoslide, 2000)
    })

    // Slider entre les images grâce à la flêche droite
    $(".right-arrow").click(function() {
        
        indexGlobal = indexGlobal + 1
        
        // Exercice : être bloquer sur la dernière slide quand on clique sur la flêche de droite
        // if (indexGlobal > 4){
        //     indexGlobal = 4
        // }

        // Bonus 1 : Infinite slider
        if (indexGlobal > 4){
            indexGlobal = 0
        }

            $(".slider").animate({
                left: `-${indexGlobal * 100}%`
            }, 1000)

            clearInterval(interval)
            interval = setInterval(autoslide, 2000)
    })

    // Slider entre les images grâce à la flêche gauche
    $(".left-arrow").click(function() {

        indexGlobal = indexGlobal - 1

        // Exercice : être bloquer sur la 1ère slide quand on clique sur la flêche de gauche
        // if (numArrow < 0){
        //     numArrow = 0
        // } 

        // Bonus 1 : Infinite slider
        if (indexGlobal < 0){
            indexGlobal = 4
        }

        $(".slider").animate({
                left: `-${indexGlobal *100}%`
        }, 1000)

        clearInterval(interval)
        interval = setInterval(autoslide, 2000)
    })


    // Bonus 2 : Standalone Slider
    
    var interval = setInterval(autoslide, 5000)
    
    function autoslide() {
        indexGlobal = indexGlobal + 1
        
        if (indexGlobal > 4){
            indexGlobal = 0
        }

        $(".slider").animate({
            left: `-${indexGlobal*100}%`
        },1000)
    }


    // Bonus 3 : Random pictures
    $(".slide").each(function(i){
        var random = Math.random()
        $(`.slide:nth-child(${i})`).css("background-image", `url("https://picsum.photos/1600/900?${random}")`)
    })

})