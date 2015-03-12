urlWebService="http://localhost/webservice/public/index.php";

var app = {
    // Application Constructor
    initialize: function() {
        console.log("initialize");
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        console.log("bindEvents");
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log("onDeviceReady");
    },

};

app.initialize();

var application = angular.module('application', ['ngRoute', 'ngTouch']);

application.config(function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl : 'partials/home.html',
            controller : 'HomeController'
        })
        .when('/position', {
            templateUrl : 'partials/position.html',
            controller : 'PositionController'
        })
        .when('/login', {
            templateUrl : 'partials/login.html',
            controller : 'UserController'
        })
        .when('/recettes', {
            templateUrl : 'partials/recettes.html',
            controller : 'RecettesController'
        })
        .otherwise({
            redirectTo : '/home'
        });

        // Ici, on définit les différentes pages et on les associent 
        // à leur controller
});