(function () {
    'use strict';

    angular
        .module('app', ['ngAnimate'])
        .constant('snabbt', window.snabbt)
        .run(function () {
            FastClick.attach(document.body);
        });

})();
