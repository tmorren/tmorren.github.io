var app = angular.module('projectsApp', []);

app.controller('projectsCtrl', function($scope){

	$scope.projects = [
		{
			"name" : "Portfolio Website", 
	    	"description" : "This is my Portfolio Website to showcase the work I have done.",
	    	"image" : "project-portfolio.png",
	    	"link" : "https://www.tylermorren.com",
	    	"github" : "https://github.com/tmorren/tmorren.github.io",
	    	"tech" : ["HTML", "CSS", "JavaScript", "jQuery", "AngularJS"]
		},
		{
			"name" : "TODO List", 
	    	"description" : "A TODO List that allows the user to save the data to local storage. ",
	    	"image" : "project-todo.png",
	    	"link" : "https://www.tylermorren.com/TODO-List",
	    	"github" : "https://github.com/tmorren/TODO-List",
	    	"tech" : ["HTML", "CSS", "JavaScript", "AngularJS"]
		},
		{
			"name" : "VerQu Website", 
	    	"description" : "I worked with a designer to create the company site for VerQu",
	    	"image" : "project-verqu.png",
	    	"link" : "https://www.verqu.com",
	    	"tech" : ["HTML", "CSS", "JavaScript", "WordPress"]
		}
	];

});


window.onload = resizeProjects;
window.onresize = resizeProjects;

function resizeProjects(){
	var maxHeight = 0;
	/*Resets the height to auto so that it 
	can correctly find the max height*/
	$(".projectContain").each(function(){
		$(this).height('auto');

	   	if ($(this).height() > maxHeight) { 
	   		maxHeight = $(this).height(); 
	   	}
	});

	/* Set the height of all projects to the max height */
	$(".projectContain").each(function(){
	   		$(this).height(maxHeight); 
	});
}