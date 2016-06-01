/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */
/*global $, jQuery, alert, console*/
"use strict";
var $				=	require("jquery");
var FreestyleNotes	=	require("./FreestyleNotes.js");

var notes;

$( document ).ready(function() {
	
	var obj = {};
	obj.div = "Test";
	obj.local_database = "Freestyle";
	
	notes = new FreestyleNotes(obj);	
});
