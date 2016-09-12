/**
 * @file rootStartup
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project gelp-oblique-boilerplate
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

/**
 *
 * @module rootStartup
 */

module.exports = function($scope){
  $scope.fromRoot = 'You can set data up in the root controller, it will be available on all ' +
    'child scopes.'
}