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
});
