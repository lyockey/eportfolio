$(document).ready(function () {

////////// SLIM MENU /////////////////
    $('#navigation').slimmenu(
        {
            resizeWidth: '750',
            collapserTitle: '',
            animSpeed: 'medium',
            easingEffect: null,
            indentChildren: false,
            childrenIndenter: '&nbsp;'
        });

////////// ANIMATE SCROLL /////////////
    $('nav').on('click', 'a', function (event) {
        if ($(event.target).is('.nav-click')) {
            event.preventDefault();
            $(this.hash).animatescroll({
                scrollSpeed: 3000,
                easing: 'easeInOutBack'
            });
        }
    });

///////// JQUERY TOAST ////////////
    $.toast({
        text: 'I also have accounts on <a href="https://www.linkedin.com/in/laurenyockey" target="_blank">LinkedIn</a> and <a href="https://www.github.com/lyockey" target="_blank">Github</a>', // Text that is to be shown in the toast
        heading: 'Hey there!', // Optional heading to be shown on the toast
        icon: 'info', // Type of toast icon
        showHideTransition: 'fade', // fade, slide or plain
        allowToastClose: true, // Boolean value true or false
        hideAfter: 30000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
        stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
        position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
        textAlign: 'left',  // Text alignment i.e. left, right or center
        loader: false,  // Whether to show loader or not. True by default
    });

////////////// SLICK ////////////
    $('.portfolio-items').slick({
        centerMode: true,
        dots: true,
        infinite: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });

    $('.contactIcon').hover(function () {
        $(this).addClass('floating');
    },
    function () {
        $(this).removeClass('floating');
    });

}); //END DOC.READY
