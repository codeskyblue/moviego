'use strict';
/*global angular, $*/

angular.module('moivego.directives', []).
directive(
	'repeatDelimiter',
    function () {
    	function compile( element, attributes ) {

                    // Get the delimiter that goes between each item.
                    var delimiter = ( attributes.repeatDelimiter || "," );
 
                    // The delimiter will show on all BUT the last
                    // item in the list.
                    var delimiterHtml = (
                        "<span class='rp-delimiter' ng-show=' ! $last '>" +
                            delimiter +
                        "</span>"
                    );
 
                    // Add the delimiter to the end of the list item,
                    // making sure to add the existing whitespace back
                    // in after the delimiter.
                    var html = element.html().replace(
                        /(\s*$)/i,
                        function( whitespace ) {
 
                            return( delimiterHtml + whitespace );
 
                        }
                    );
 
                    // Update the compiled HTML.
                    element.html( html );
 
                }
 
 
                // Return the directive configuration. Notice that
                // our priority is 1 higher than ngRepeat - this will
                // be compiled before the ngRepeat compiles.
                return({
                    compile: compile,
                    priority: 1001,
                    restirct: "A"
                });
    }
);