(function () {
    'use strict';
    
    angular.module('BlurAdmin.pages.projectDetail',[])
    .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('projectDetail', {
            url: '/projectDetail',
            templateUrl: 'app/pages/projectDetail/projectDetail.html',
            title: 'Project Detail',
            sidebarMeta: {
                order: 0,
            },
        });
    }

    
  
  })();