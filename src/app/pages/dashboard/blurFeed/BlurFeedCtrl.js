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
        author: 'Masa',
        surname: 'Satomi',
        header: 'Posted new message',
        text: 'network enginner, web application, infrastracture',
        time: 'Today 11:55 pm',
        ago: '25 minutes ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Masa',
        surname: 'Satomi',
        header: 'Posted new message',
        text: 'network enginner, web application, infrastracture',
        time: 'Today 11:55 pm',
        ago: '25 minutes ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Masa',
        surname: 'Satomi',
        header: 'Posted new message',
        text: 'network enginner, web application, infrastracture',
        time: 'Today 11:55 pm',
        ago: '25 minutes ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Masa',
        surname: 'Satomi',
        header: 'Posted new message',
        text: 'network enginner, web application, infrastracture',
        time: 'Today 11:55 pm',
        ago: '25 minutes ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Masa',
        surname: 'Satomi',
        header: 'Posted new message',
        text: 'network enginner, web application, infrastracture',
        time: 'Today 11:55 pm',
        ago: '25 minutes ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Masa',
        surname: 'Satomi',
        header: 'Posted new message',
        text: 'network enginner, web application, infrastracture',
        time: 'Today 11:55 pm',
        ago: '25 minutes ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Masa',
        surname: 'Satomi',
        header: 'Posted new message',
        text: 'network enginner, web application, infrastracture',
        time: 'Today 11:55 pm',
        ago: '25 minutes ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Masa',
        surname: 'Satomi',
        header: 'Posted new message',
        text: 'network enginner, web application, infrastracture',
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