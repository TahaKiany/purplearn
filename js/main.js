// $(document).ready(function(){
//     $('.header-down .menu-down > ul > li > ul').filter(function(){
//         return(!$(this).find('ul').length)
//     }).addClass('small-menu');
// })
$('#product-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    autoplay:true,
    onInitialized:start,
    onTranslate:reset,
    onTranslated:start,
    autoplayTimeout:10000,
})
function start(){
    $('.progres-bar').css({
        width:'100%',transition:'10s',
    })
}
function reset(){
    $('.progres-bar').css({
        width:'0%',transition:'0s',
    })
}
$('#top-product,#related-post').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    },
    autoplay:true,
    autoplayTimeout:10000,
})