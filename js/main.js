/* global ProgressBar, Waypoint  */

$(document).ready(function () {

////////// ANIMATE SCROLL /////////////
    $('nav').on('click', 'a', function (event) {
        event.preventDefault();

        $(this.hash).animatescroll({
            scrollSpeed: 3000,
            easing: 'easeInOutBack'
        });
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

    $('.portfolio-item').slick({
        setting-name: setting-value
      });

}); //END DOC.READY
