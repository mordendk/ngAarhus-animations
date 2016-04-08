(function(){ 'use strict';

    angular
        .module('app')
        .directive('animEvents', animEventsDirective);

    /*@ngInject*/
    function animEventsDirective($animate) {

        return {
            link: function($scope, $element, $attr){

                var animations, animationHandlersSet,

                    handleAnimation = function(animation, event) {

                        if(!animation){
                            return;
                        }


                        $scope.$evalAsync(function(){
                            $animate.animate($element, {}, {}, animation);
                        });

                    },

                    setAnimationHandlers = function(){
                        angular.forEach(animations, function(animation, event){
                            $element.on(event, function(){
                                handleAnimation(animation, event);
                            });
                        });
                        animationHandlersSet = true;
                    };


                $scope.$watch($attr.animEvents, function(newVal){
                    animations = newVal;
                    !animationHandlersSet && setAnimationHandlers();
                }, true);


            }
        }
    }

})();





















































