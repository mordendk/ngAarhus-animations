(function(){ 'use strict';

    angular
        .module('app')
        .animation('.anim-fade', function(snabbt) {

        return {
            enter: function($element, done){
                var element = $element[0];

            },
            leave: function($element, done){
                var element = $element[0];

            },

            move: function($element, done){},
            addClass: function($element, className, done){},
            removeClass: function($element, className, done){},
            animate: function($element, className, from, to, done){}

        }
    });


})();