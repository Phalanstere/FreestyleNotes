/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */
/*global $, jQuery, alert, console*/
var $ = require("jquery");


function FreestyleNotes(obj){
	"use strict";
	var self = this;
	
	this.init = function() {
		var s = "";

		s = '<div id = "FreestyleNotes" class = "FreestyleNotes">';
			s += '<div id = "menu" class = "menu">';
				s += '<div id = "new_note" class = "item">NEW</div>';
			s += '</div>';
			s += '<div id = "field" class = "field">';
			s += '<textarea id = "TextInput">Enter a note</textarea>';
			s += '</div>';		
		
		s += '</div>';

					
		if (obj.div){
			self.div_id = obj.div;				
			$("#" + self.div_id).html(s);	
			}
		else 
			{
			$("body").append(s);	
			}
		
		$("#FreestyleNotes #new_note").click(function(){
			alert("Ich kann mir hier Notizen machen");
		});
				

	};

	self.init();
	
}



if (typeof(module) !== "undefined") {
	module.exports = exports = FreestyleNotes;
	}