var app = angular.module('projectsApp', []);

app.controller('projectsCtrl', function($scope){

	$scope.projects = [
		{
			"name" : "Portfolio Website", 
	    	"description" : "This is my Portfolio Website to showcase the work I have done.",
	    	"image" : "project-portfolio.png",
	    	"link" : "https://www.tylermorren.com",
	    	"github" : "https://github.com/tmorren/tmorren.github.io",
	    	"tech" : ["HTML", "CSS", "JavaScript", "jQuery", "AngularJS", "Responsive"]
		},
		{
			"name" : "Synkros.io", 
	    	"description" : "To read a desciption of the project, click the link below.",
	    	"link" : "http://www.tylermorren.com/Synkros-Info",
	    	"image" : "project-synkros.png",
	    	"tech" : ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "MySQL"]
		},
		{
			"name" : "NBA Stats", 
	    	"description" : "A modern clone of the NBA website developed using Angular4.",
	    	"image" : "project-nbastats.png",
	    	"link" : "https://www.tm-nbastats.com/",
	    	"github" : "https://github.com/tmorren/nba-stats",
	    	"tech" : ["HTML", "CSS", "JavaScript", "Angular4", "ChartJS"]
		},
		{
			"name" : "colorMatch", 
	    	"description" : "A color matching game for the browser.",
	    	"image" : "project-colormatch.png",
	    	"link" : "http://www.tylermorren.com/colorMatch/",
	    	"github" : "https://github.com/tmorren/colorMatch/tree/gh-pages",
	    	"tech" : ["HTML", "CSS", "JavaScript", "jQuery"]
		},
		{
			"name" : "TODO List", 
	    	"description" : "A TODO List that allows the user to save the data to local storage. ",
	    	"image" : "project-todo.png",
	    	"link" : "https://www.tylermorren.com/TODO-List",
	    	"github" : "https://github.com/tmorren/TODO-List/tree/gh-pages",
	    	"tech" : ["HTML", "CSS", "JavaScript", "AngularJS", "Responsive"]
		},
		{
			"name" : "VerQu File Uploader", 
	    	"description" : "A simple file upload WordPress Plugin. Allows for restricted file types and max file size.",
	    	"image" : "project-vfu.png",
	    	"tech" : ["HTML", "CSS", "PHP", "WordPress"]
		},
		{
			"name" : "VerQu Website", 
	    	"description" : "I worked with a designer to create the company site for VerQu.",
	    	"image" : "project-verqu.png",
	    	"link" : "https://www.verqu.com",
	    	"tech" : ["HTML", "CSS", "JavaScript", "WordPress", "Responsive"]
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