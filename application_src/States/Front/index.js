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

angular.module('Application.States.Front',[])
.config(function($stateProvider){
  $stateProvider
    .state('root.welcome', {
      url: '/',
      templateUrl: 'html/States/Front/welcome.html',
      controller: require('./controllers/frontWelcome')
    })
})