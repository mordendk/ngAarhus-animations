(function() {
    'use strict';

    angular
        .module('app')
        .factory('viewportEvents', viewportEventsService);


    /*@ngInject*/
    function viewportEventsService($window, $document, domMutation) {

        var ticking = false,
            tickCallbacks = [],
            viewport = {
                width: getWindowWidth(),
                height: $window.innerHeight,
                scrollX: getPageOffset('x'),
                scrollY: getPageOffset('y')
            };

        angular.element($window)
            .on('scroll', scrollHandler)
            .on('resize orientationchange', resizeHandler);

        domMutation.observe($document[0], requestTick);

        requestTick();

        return {
            viewport: viewport,
            setCallback: setCallback,
            removeCallback: removeCallback
        };


        function setCallback(callback) {
            return tickCallbacks.push(callback);
        }

        function removeCallback(callback) {
            var index = tickCallbacks.indexOf(callback);
            return delete tickCallbacks[index];
        }

        function getPageOffset(axis) {
            return (axis === 'y')
                ? $window.pageYOffset || $document[0].documentElement.scrollTop
                : $window.pageXOffset || $document[0].documentElement.scrollLeft;
        }

        function tick() {
            ticking = false;
            tickCallbacks.forEach(function(callback) {
                callback && callback.call(callback, viewport);
            });
        }

        function requestTick() {
            if (!ticking) {
                $window.requestAnimationFrame(tick);
            }
            ticking = true;
        }

        function scrollHandler() {
            viewport.scrollX = getPageOffset('x');
            viewport.scrollY = getPageOffset('y');
            requestTick();
        }

        function resizeHandler() {
            viewport.width = getWindowWidth();
            viewport.height = $window.innerHeight;
            requestTick();
        }

        function getWindowWidth() {
            return Math.max($window.innerWidth, $window.document.documentElement.clientWidth);
        }


    }

})();


/*
	Suggestion for future enhancements would be to stop using callbacks and instead trigger custom events
	Modern: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
	IE9:	https://developer.mozilla.org/en/docs/Web/API/CustomEvent
*/