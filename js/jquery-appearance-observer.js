(function ($) {
    "use strict";
    $.fn.appearanceObserver = function (options) {
        let defaults = {
            onAppeared: function () {
            },
            onDisappeared: function () {
            },
        };

        let settings = $.extend({}, defaults, options),
            observe = this,
            observeTopOffset = observe.offset().top,
            observeHeight = observe.outerHeight(),
            windowHeight = $(window).height(),
            windowScrollTop = $(window).scrollTop(),
            observeTop = (observeTopOffset + observeHeight - windowHeight);

        if (windowScrollTop > observeTop && observeTopOffset < windowScrollTop) {
            settings.onDisappeared.call();
        } else {
            settings.onAppeared.call();
        }

        return this;
    };
}(jQuery));