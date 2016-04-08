(function(){ 'use strict';

    angular.module('app').directive('ngSrcset', ['$timeout', function($timeout) {
        return {
            priority: 98,
            link: function($scope, $element, $attrs){
                var respimageUpdate = function(){
                    window.respimage({
                        elements: $element[0]
                    });
                };
                if(window.respimage){
                    $timeout(respimageUpdate);
                }

            }
        }
    }]);

})();
