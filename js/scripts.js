var app = angular.module('projectsApp', []);

app.controller('projectsCtrl', function($scope){

	$scope.projects = [
		{
			"name" : "Portfolio Website", 
	    	"description" : "This is my Portfolio Website",
	    	"image" : "project-portfolio.png",
	    	"link" : "https://www.tylermorren.com",
	    	"tech" : ["HTML", "CSS", "JavaScript", "jQuery", "AngularJS"]
		},
		{
			"name" : "TODO List", 
	    	"description" : "A TODO List that allows the user to save the data to local storage. ",
	    	"image" : "project-todo.png",
	    	"link" : "https://www.tylermorren.com/TODO-List",
	    	"tech" : ["HTML", "CSS", "JavaScript", "AngularJS"]
		},
		{
			"name" : "VerQu Website", 
	    	"description" : "A TODO List that allows the user to save the data to local storage. ",
	    	"image" : "project-verqu.png",
	    	"link" : "https://www.verqu.com",
	    	"tech" : ["HTML", "CSS", "JavaScript", "WordPress"]
		}
	];

});

