(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.hackerlist', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('hackerlist', {
            url: '/hackerlist',
            templateUrl: 'app/pages/hackerlist/hackerlist.html',
            title: 'hackerlist',
            sidebarMeta: {
                icon: 'ion-gear-a',
                order: 100,
              },
          });
    }
  
  })();