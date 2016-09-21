let $ = require('jquery');
let angular = require('angular');
let ngMaterial = require('angular-material');
let ngRoute = require('angular-route');
let angularSpinners = require('angular-spinners');
	// Main module
let app = angular.module('app', ['blogDirective', 'ngMaterial', 'ngRoute', 'angularSpinners']);
	//Routes for main and about.html
	app.config(function($routeProvider, $locationProvider){ 
		$routeProvider.when('/about', {
			templateUrl: 'about.html',
			controller: "ctrl"
			})
			.otherwise({
				redirectTo: '/'
			})		
			$locationProvider.html5Mode(true);		
	});
		//Binds default image to results which have none set
	app.directive('onErrorSrc', function() {
	    return {
	        link: function(scope, element, attrs) {
	          element.bind('error', function() {
	            if (attrs.src != attrs.onErrorSrc) {
	              attrs.$set('src', attrs.onErrorSrc);
	            }
	          });
	        }
	    }
	});
	//Controller for Quote API, NYT API, show/hide routes
app.controller('ctrl', function($scope, GetQuotes){
	this.logo = "The Thought Corner";
	this.greeting = "Enhance Your Perspective";
	this.subgreeting = "a place where ideas are born and shared";
	this.blogText = "test";
	this.showGreeter = true;
	this.query = "";
		this.hideGreeter = function(){
			this.showGreeter = false;
		}
		this.openMenu = function($mdOpenMenu, ev) {
	      originatorEv = ev;
	      $mdOpenMenu(ev);
    };
	let ctrl2 = this;	
	GetQuotes.getQuotes(function(response) {
			ctrl2.object = response.quote;
			ctrl2.author = response.author;
			$scope.$apply();
 			});	
		this.signInShow = false;
		this.exploreShow = false;
});
	//Service for Quotes
	app.service("GetQuotes", function($http){
		this.getQuotes = function(callBack){ 
			$.ajax({
			    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/category=famous',
			    method: 'POST',
			    contentType: 'application/x-www-form-urlencoded',
			    dataType: 'json',
			    headers: {'X-Mashape-Key': 'GQCEbLywpTmshASpGMb1JQUb2MZQp12IxTEjsni1JrRHEjYLyt'},
			    accept: "application/json"
			    
			}).done(function(data){
				callBack(data);
			 	})
		}
	 });
	//Service for NYT articles
	app.service("Blogs", function($http){
		this.getBlogs = function(type, search, query, page, callBack){			
			let request = {
			  'api-key': "a60ec845fb53482491767c88041a4e8b",
			  'q': "technology, world, psychology, travel, love",
			  'page': page
			}
			if(type == 'mostRecent'){
				request.q = 'technology, world, psychology, travel, love';
				request.sort = 'newest';
			}
			else if(search == 'custom'){
				request.q = "travel, football, economics";	
			}
			else if(query){
				request.q = query;
			};
		let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
			url += '?' + $.param(request);
			$.ajax({
			  url: url,
			  method: 'GET',
			}).done(function(result){
			  callBack(result);
			}).fail(function(err) {
			  throw err;
			});
			};
		});
		





 	
