(function(){ 'use strict';

    angular
        .module('app')
        .animation('.anim-spin', function(snabbt) {

        return {
            animate: function($element, className, from, to, done){

                var element = $element[0];
                
                snabbt(element, {
                    position: [100, 0, 0],
                    fromRotation: [0, 0, 0],
                    rotation: [0, 0, 2*Math.PI],
                    easing: 'spring',
                    springConstant: 0.3,
                    springDeceleration: 0.8
                })
                .snabbt({
                    position: [0, 0, 0],
                    fromRotation: [0, 0,0],
                    easing: 'spring',
                    springConstant: 0.3,
                    springDeceleration: 0.8,
                    complete:done
                 });

            }
            
        }
    });

  

})();