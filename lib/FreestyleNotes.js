/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */
/*global $, jQuery, alert, console*/
var $ = require("jquery");
var Datastore 	 = require('nedb');


function FreestyleNotes(obj){
	"use strict";
	var self = this;
	
	this.init_db = function(){
		var dbase = "db/";
		if (obj.local_database) {
			dbase += obj.local_database;

			
		} else {
			dbase = "db/FreestyleNotes";
			}
		// dabase is created
		self.db = new Datastore({ filename: dbase });
	};
	
	
	// initialization, GUI
	this.init = function() {
		var s = "";

		s = '<div id = "FreestyleNotes" class = "FreestyleNotes">';
			s += '<div id = "menu" class = "menu">';
				s += '<div id = "new_note" class = "item">NEW</div>';
			s += '</div>';
			s += '<div id = "field" class = "field">';

			s += '<label for="title">title<input id="Title" value= "title"></label>';
			
			s += '<textarea id = "TextInput">Enter a note</textarea>';
			
			s += '<label for="tags">tags<input id="Tags" value= "tags"></label>';
			
			s += '<div id = "submit">SUBMIT</div>';
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
		
		
		self.init_db();
		
		$("#FreestyleNotes #new_note").click(function(){
			alert("Ich kann mir hier Notizen machen");
		});
				

		$("#FreestyleNotes #submit").click(function(){
			var o 	= {}, str;
			o.title = $("#FreestyleNotes #Title").val();
			str 	=  $("#FreestyleNotes #Tags").val();
			
			str = str.replace(/ /g,"");
			
			o.tags = str.split(',');
			o.text	= $("#FreestyleNotes #TextInput").val();
			
			alert(o.title);
			
		});

	};

	self.init();
	
}



if (typeof(module) !== "undefined") {
	module.exports = exports = FreestyleNotes;
	}