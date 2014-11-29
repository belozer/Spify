(function( $ ){

$.fn.spify = function( options ) {

    var settings = $.extend( {
        'count'     : 1,
        'url'       : '',
        'duration'  : 300,
        'size'      : [100, 100],
        'durations' : {},
        'vector'    : 'vertical'
    }, options);

    return this.each(function() {
        var size      = settings.size;
        var url       = settings.url;
        var count     = settings.count;
        var duration  = settings.duration;
        var durations = settings.durations;
        var vector    = settings.vector;

        var dataSize      = $(this).attr('data-size');
        var dataCount     = $(this).attr('data-count');
        var dataUrl       = $(this).attr('data-url');
        var dataDuration  = $(this).attr('data-duration');
        var dataDurations = $(this).attr('data-durations');
        var dataVector    = $(this).attr('data-vector');

        var _tmp, _i, _d;

        if (dataSize) {
            size = dataSize.split(',');
            size[0] = parseInt(size[0]);
            size[1] = parseInt(size[1]);
        }

        if (dataCount)    { count = parseInt(dataCount); }
        if (dataUrl)      { url   = dataUrl; }
        if (dataDuration) { duration = parseInt(dataDuration); }
        if (dataVector)   { vector   = dataVector }

        if (dataDurations) {
            durations = {};
            _tmp = dataDurations.split(',');
            for (i in _tmp) {
                _d = _tmp[i].split(':');
                durations[parseInt(_d[0])] = parseInt(_d[1]);
            }
        }


        var el = $(this);

        var currentIndex = 0;
        var bgPos;

        function circle () {
            currentIndex += 1;
            if (currentIndex >= count) { currentIndex = 0; }

            if (vector == 'vertical') {
                bgPos = size[1] * currentIndex;
                bgPos = '0px ' + -bgPos + 'px';
            } else {
                bgPos = -size[0] * currentIndex + 'px 0px';
            }

            el.css('background-position', bgPos );

            if ((_d = durations[currentIndex + 1]) === undefined) {
                _d = duration;
            }

            setTimeout(circle, _d);
        }

        $(this).css({
            width:  size[0],
            height: size[1],
            background: 'url(' + url + ')'
        });

        setTimeout(circle, duration);

    });

};
})( jQuery );
