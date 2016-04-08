(function(){ 'use strict';

    angular
        .module('app')
        .animation('.anim-shake', function(snabbt) {

        return {
            animate: function($element, className, from, to, done){

                done();
                
                var element = $element[0];

                snabbt(element, 'attention', {
                    position: [100, 0, 0],
                    springConstant: 2.4,
                    springDeacceleration:0.9
                });

            }
            
        }
    });

  

})();