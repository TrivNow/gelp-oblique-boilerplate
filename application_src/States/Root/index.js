/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project gelp-oblique-boilerplate
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

/**
 *
 * @module index
 */


angular.module('Application.States.Root', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
        abstract:true,
        cache: false,
        templateUrl: 'html/States/Root/Root.html',
        controller: require('./controllers/rootStartup')
      })
    $urlRouterProvider.otherwise('/');
  })