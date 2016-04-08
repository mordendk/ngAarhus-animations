(function(){ 'use strict';

    angular
        .module('app')
        .directive('lazySrcset', lazySrcsetDirective);

    /*@ngInject*/
    function lazySrcsetDirective($timeout, $window, $animate, viewportEvents, ngSrcsetDirective) {

        var ngSrcset = ngSrcsetDirective[0];

        return {
            priority: ngSrcset.priority,
            link: function($scope, $element, $attr){

                var lnkFnArgs = arguments;

                viewportEvents.setCallback(function(viewport){

                    var posY = $element[0].getBoundingClientRect().top,
                        winHeight = viewport.height + 200,
                        isInView = posY <= winHeight;

                    if(isInView){
                        viewportEvents.removeCallback(this);
                        initLazySrcset();
                    }

                });

                function initLazySrcset(){

                    $attr.ngSrcset = $attr.lazySrcset;
                    ngSrcset.link.apply(ngSrcset, lnkFnArgs);

                    $window.respimage && $timeout(function(){
                        $window.respimage({
                            elements: $element[0]
                        });
                    });

                    $scope.$evalAsync(function(){
                        $animate.animate($element, {}, {}, 'anim-lazy-srcset');
                    });

                };

            }
        }
    };

})();
