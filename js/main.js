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
	.state('prj1', {
		url: '/projects/prj1',
		templateUrl: 'templates/project/prj1.html',
		controller: 'prj1Ctrl'
	})
	.state('prj2', {
		url: '/projects/prj2',
		templateUrl: 'templates/project/prj2.html',
		controller: 'prj2Ctrl'
	})
	.state('prj3', {
		url: '/projects/prj3',
		templateUrl: 'templates/project/prj3.html',
		controller: 'prj3Ctrl'
	})
	.state('prj4', {
		url: '/projects/prj4',
		templateUrl: 'templates/project/prj4.html',
		controller: 'prj4Ctrl'
	})
	.state('prj5', {
		url: '/projects/prj5',
		templateUrl: 'templates/project/prj5.html',
		controller: 'prj5Ctrl'
	})
	.state('prj6', {
		url: '/projects/prj6',
		templateUrl: 'templates/project/prj6.html',
		controller: 'prj6Ctrl'
	})
});

mainApp.controller('homeCtrl', function($scope) {

})
.controller('aboutCtrl', function($scope) {

})
.controller('projectsCtrl', function($scope) {
	$scope.title = "Projects"
});
