function Config($urlRouterProvider, $stateProvider, $locationProvider){
	$locationProvider.html5Mode(true);

	$stateProvider
		.state('/',{
			url: '/',
			templateUrl: "client/index.ng.html",
			controller: "IndexCtrl as index"
		})

	$urlRouterProvider.otherwise('/');
}

function IndexCtrl($mdSidenav){
	var self = this;

	self.toggleSidenav = function(menuId){
		$mdSidenav(menuId).toggle();
	};
}

if (Meteor.isClient){
	angular.module('app',['angular-meteor','ui.router','ngMaterial'])
		.config(['$urlRouterProvider', '$stateProvider', '$locationProvider',Config])
		.controller('IndexCtrl',['$mdSidenav',IndexCtrl]);
 }