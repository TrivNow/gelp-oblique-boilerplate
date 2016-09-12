/* 
 * Pomegranate application Default-App
 */

var Pomegranate = require('pomegranate');
var FrameworkOptions = require('./PomegranateSettings');

var pom = Pomegranate(FrameworkOptions);

pom.start();