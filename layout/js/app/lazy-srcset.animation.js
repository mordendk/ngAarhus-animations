(function(){ 'use strict';

    angular
        .module('app')
        .animation('.anim-lazy-srcset', function(snabbt) {

        return {
            animate: function($element, className, from, to, done){

                done();

                var element = $element[0],
                    elementMass = element.offsetHeight * element.offsetWidth / 1000;
                
                elementMass = Math.min(elementMass, 300);
                elementMass = Math.max(elementMass, 100);
                
                snabbt(element, {
                    fromScale:[0,0],
                    scale:[1,1],
                    easing: 'spring',
                    springConstant: 2.4,
                    springDeacceleration:0.9,
                    springMass: elementMass
                });

            }
            
        }
    });

  

})();

