var mainApp = angular.module('mainApp', ['ui.router']);

mainApp.config(function($stateProvider) {
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'templates/home.html',
		controller: 'homeCtrl'
	})
	.state('about', {
		url: '/about',
		templateUrl: 'templates/about.html',
		controller: 'aboutCtrl'
	})
	.state('projects', {
		url: '/projects',
		templateUrl: 'templates/projects.html',
		controller: 'projectsCtrl'
	})
});

mainApp.controller('homeCtrl', function($scope) {

})
.controller('aboutCtrl', function($scope) {

})
.controller('projectsCtrl', function($scope) {
	$scope.title = "Projects"
});
