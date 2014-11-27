(function( $ ){

$.fn.spif = function( options ) {

    var settings = $.extend( {
        'fps'    : 5,
        'frames' : 1,
        'url'    : '',
        'frame'  : [100, 100],
        'vector' : 'vertical'
    }, options);

    var time = Math.floor( 1000 / settings.fps );

    return this.each(function() {

        var el = $(this);

        var currentIndex = 0;
        var bgPos;

        function circle () {
            currentIndex += 1;
            if (currentIndex >= settings.frames) { currentIndex = 0; }

            if (settings.vector == 'vertical') {
                bgPos = settings.frame[1] * currentIndex;
                bgPos = '0px ' + -bgPos + 'px';
            } else {
                bgPos = -settings.frame[0] * currentIndex + 'px 0px';
            }

            console.log(bgPos);
            el.css('background-position', bgPos );
        }

        $(this).css({
            width:  settings.frame[0],
            height: settings.frame[1],
            background: 'url(' + settings.url + ')'
        });

        setInterval(circle, time);

    });

};
})( jQuery );
