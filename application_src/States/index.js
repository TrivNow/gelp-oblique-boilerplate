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

require('./Root')
require('./Detail')
require('./Front')

angular.module('Application.States', [
  'Application.States.Root',
  'Application.States.Front',
  'Application.States.Detail'
])