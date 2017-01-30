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

    /////////////// SKILLS BARS //////////////////

    /////// LANGUAGES //////////

    var lang = {
        strokeWidth: 2,
        easing: 'easeInOut',
        duration: 1400,
        color: '#ffea82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
    };

    //XHTML
    var bar1 = new ProgressBar.Line('#lang1', lang);

    //HTML5
    var bar2 = new ProgressBar.Line('#lang2', lang);

    //CSS
    var bar3 = new ProgressBar.Line('#lang3', lang);

    //JS
    var bar4 = new ProgressBar.Line('#lang4', lang);

    //jQuery
    var bar5 = new ProgressBar.Line('#lang5', lang);

    //PHP
    var bar6 = new ProgressBar.Line('#lang6', lang);


    ////////// SOFTWARE //////////////
    var software = {
        strokeWidth: 2,
        easing: 'easeInOut',
        duration: 1400,
        color: '#1a75ff',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
    };

    // PHOTOSHOP
    var bar7 = new ProgressBar.Line('#design1', software);

    //INDESIGN
    var bar8 = new ProgressBar.Line('#design2', software);

    //ILLUSTRATOR
    var bar9 = new ProgressBar.Line('#design3', software);


    /////// DIGITAL MARKETING //////

    var digital = {
        strokeWidth: 2,
        easing: 'easeInOut',
        duration: 1400,
        color: '#ff0000',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
    };

    //SEO
    var bar10 = new ProgressBar.Line('#dig1', digital);

    //SEM
    var bar11 = new ProgressBar.Line('#dig2', digital);

    //ANALYTICS
    var bar12 = new ProgressBar.Line('#dig3', digital);

    //SOCIAL
    var bar13 = new ProgressBar.Line('#dig4', digital);

    //COPY
    var bar14 = new ProgressBar.Line('#dig5', digital);

    ///////// TRIGGER ANIMATION ON SCROLL (WAYPOINTS PLUGIN)////////

    var inview = new Waypoint.Inview({
        element: $('.skills')[0],
        entered: function () {
            bar1.animate(1.0);
            bar2.animate(1.0);
            bar3.animate(0.9);
            bar4.animate(0.5);
            bar5.animate(0.55);
            bar6.animate(0.35);
            bar7.animate(0.75);
            bar8.animate(0.95);
            bar9.animate(0.78);
            bar10.animate(1.0);
            bar11.animate(0.7);
            bar12.animate(0.75);
            bar13.animate(0.9);
            bar14.animate(1.0);
        },
    });

    ///////// CUSTOM JQUERY ////////////
    ////// When the HIRE ME button is clicked, it will transform into a one-line email submission form. When the user clicks submit, it will then be replaced with some 'Thank You' copy.

    // Add event listener to HIRE ME to listen for click.
    // Replace with email input form.
    $('#hire').on('click', function () {
        $('#hire').replaceWith(
            '<form method="post" action="mailto:laurenyockey@gmail.com"><input type="email" name="email" id="email" placeholder="What\'s your email?"><input type="submit" value="submit" id="submit"/></form>'
        );

        // Add second event listener to SUBMIT to listen for click.
        // Replace with Thank You copy.
        $('#submit').on('click', function () {
            $('form').submit();
            $('form').replaceWith(
                '<p>Thank you for your interest! I will be in touch shortly.</p>'
            );
        });
    });

}); //END DOC.READY
