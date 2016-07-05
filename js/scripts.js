var app = angular.module('projectsApp', []);

app.controller('projectsCtrl', function($scope){
	$scope.projects = [
		{
			"name" : "Portfolio Website", 
	    	"description" : "This is my Portfolio Website",
	    	"image" : "project-portfolio.png",
	    	"tech" : ["HTML", "CSS", "JavaScript", "jQuery", "AngularJS"]
		},
		{
			"name" : "Portfolio Website", 
	    	"description" : "This is my Portfolio Website",
	    	"image" : "project-portfolio.png",
	    	"tech" : ["HTML", "CSS", "JavaScript", "jQuery", "AngularJS"]
		}
	];

});