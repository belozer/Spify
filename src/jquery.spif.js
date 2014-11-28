(function( $ ){

$.fn.spif = function( options ) {

    var settings = $.extend( {
        'fps'      : 5,
        'frames'   : 1,
        'url'      : '',
        'duration' : 300,
        'frame'    : [100, 100],
        'framesDuration' : {},
        'vector' : 'vertical'
    }, options);

    return this.each(function() {

        var el = $(this);

        var currentIndex = 0;
        var bgPos;
        var duration = settings.duration;

        function circle () {
            currentIndex += 1;
            if (currentIndex >= settings.frames) { currentIndex = 0; }

            if (settings.vector == 'vertical') {
                bgPos = settings.frame[1] * currentIndex;
                bgPos = '0px ' + -bgPos + 'px';
            } else {
                bgPos = -settings.frame[0] * currentIndex + 'px 0px';
            }

            el.css('background-position', bgPos );

            if ((duration = settings.framesDuration[currentIndex + 1]) === undefined) {
                duration = settings.duration;
            }

            setTimeout(circle, duration);
        }

        $(this).css({
            width:  settings.frame[0],
            height: settings.frame[1],
            background: 'url(' + settings.url + ')'
        });

        setTimeout(circle, duration);

    });

};
})( jQuery );
