(function () {
    'use strict';
    
    angular.module('BlurAdmin.pages.hacker',[])
    .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('hacker', {
            url: '/hacker',
            templateUrl: 'app/pages/hacker/hacker.html',
            title: 'Hacker Profile',
            sidebarMeta: {
                order: 0,
            },
        });
    }
  
  })();