/*jslint browser: true*/
/*global $, jQuery, alert*/


function main() {
    "use strict";
    $('#band1').mouseenter(function () {
        $('#menu1').show();
        $('#band1').css("background", "");
        $('#band2').css("opacity", ".7");
        $('#band3').css("opacity", ".7");
    });
    $('#band1').mouseleave(function () {
        $('#menu1').hide();
        $('#band1').css("background", "");
        $('#band2').css("opacity", "");
        $('#band3').css("opacity", "");
    });
    
    $('#band2').click(function () {
        $('#menu2').toggle();
    });
    
    $('#band3').mouseenter(function () {
        $('#menu3').show();
    });
    $('#band3').mouseleave(function () {
        $('#menu3').hide();
    });
}

var $target;
var x = 1;

$(document).ready(function () {
    "use strict";
    $('#menu1').hide();
    $('#menu2').hide();
    $('#menu3').hide();
    main();
});
