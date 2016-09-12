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

angular.module('Application.States.Detail',[])
  .config(function($stateProvider){
    $stateProvider
      .state('root.details', {
        url: '/details',
        templateUrl: 'html/States/Detail/details.html',
        controller: require('./controllers/details')
      })
      .state('root.details.more', {
        url: '/more',
        templateUrl: 'html/States/Detail/more.html',
        controller: require('./controllers/more')
      })
  })