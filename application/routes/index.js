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

module.exports = function(Router){
  Router.get('/', function(req, res, next){
    res.render('index')
  })

  return Router
}