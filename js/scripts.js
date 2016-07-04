/* Retrieve JSON data for projects */
var app = angular.module('projectsApp', []);

app.controller('projectsCtrl', function($scope, $http){

	$scope.projects = [];

	//Gets the JSON data from the link
	$http.get('js/projects.json').then(function(res){
  			$scope.projects = res.data;
    });
});