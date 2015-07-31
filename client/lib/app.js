function Config($urlRouterProvider, $stateProvider, $locationProvider){
	$locationProvider.html5Mode(true);

	$stateProvider
		.state('home',{
			url: '/home',
			templateUrl: "client/index.ng.html",
			controller: "IndexCtrl as index"
		})
		.state('home.dashboard',{
			url: '/dashboard',
			templateUrl: "client/dashboard.ng.html",
			controller: "IndexCtrl as index"
		})
	$urlRouterProvider.otherwise('/home');
}

function IndexCtrl($mdSidenav){
	var self = this;

	self.toggleSidenav = function(menuId){
		$mdSidenav(menuId).toggle();
	};
}

function SidenavCtrl() {
	this.menu = [ 
		{ title: "Dashboard", icon: "action:ic_dashboard_24px" },
		{ title: "Freinds", icon: "social:ic_people_24px" },
		{ title: "Chats", icon: "communication:ic_message_24px" }	
	];

	this.management = [
		{ title: "Settings", icon: "action:ic_settings_24px" },
		{ title: "Trash", icon: "action:ic_delete_24px" }
	];
}

var themeIcons = function ($mdIconProvider) {

  $mdIconProvider
    .iconSet("social",
             "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg")

    .iconSet("action",
             "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-action.svg")

    .iconSet("communication",
             "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-communication.svg")

    .iconSet("content",
             "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content.svg")

    .iconSet("toggle",
             "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-toggle.svg")

    .iconSet("navigation",
             "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg")

    .iconSet("image",
             "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-image.svg");

};


if (Meteor.isClient){
	angular.module('app',['angular-meteor','ui.router','ngMaterial'])
		.config(['$urlRouterProvider', '$stateProvider', '$locationProvider',Config])
		.controller('IndexCtrl',['$mdSidenav',IndexCtrl])
		.controller('SidenavCtrl',['$mdSidenav',SidenavCtrl])
		.config(themeIcons);
 }