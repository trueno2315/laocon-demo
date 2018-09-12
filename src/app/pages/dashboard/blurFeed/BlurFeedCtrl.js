/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('BlurFeedCtrl', BlurFeedCtrl);

  /** @ngInject */
  function BlurFeedCtrl($scope) {
    $scope.feed = [
      {
        type: 'text-message',
        author: 'Alexander',
        surname: 'Alexander',
        header: 'Posted new message',
        text: 'frontend(html css javascript) backend(node.js java)',
        time: 'Today 11:55 pm',
        ago: '25 minutes ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Andrey',
        surname: 'Andrey',
        header: 'Posted new message',
        text: 'nweb application, infrastracture',
        time: 'Today 11:55 pm',
        ago: '25 minutes ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Masa',
        surname: 'Masa',
        header: 'Posted new message',
        text: 'network enginner, web application, infrastracture',
        time: 'Today 11:55 pm',
        ago: '25 minutes ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Kostya',
        surname: 'Kostya',
        header: 'Posted new message',
        text: 'web application',
        time: 'Today 11:55 pm',
        ago: '25 minutes ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Nick',
        surname: 'Nick',
        header: 'Posted new message',
        text: 'infrastracture, hadoop, linux',
        time: 'Today 11:55 pm',
        ago: '25 minutes ago',
        expanded: false,
      }
    ];

    $scope.expandMessage = function(message){
      message.expanded = !message.expanded;
    }
  }
})();