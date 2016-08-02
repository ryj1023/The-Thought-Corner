angular.module('blogDirective', [])
.directive('blogContent', function(){

	return{
		restrict: 'E',
		scope: {
			type: '=',
			search: '='
			},

		templateUrl: "blogDirective.html",

			//Controller for article results

		controller: function($rootScope, $scope, $attrs, Blogs){
				
				$rootScope.page = 0;

				//order for page number variable
				
			$rootScope.addMoreItems = function(order){

				if(!order){
					order = 0;
				}

					$rootScope.page += parseInt(order);

					// NYT API callback function and image provider

				Blogs.getBlogs($attrs.type, $attrs.search, $rootScope.page, function(response) {

						 if(response.response.docs[0].multimedia[0] == null){

						 	response.response.docs[0].multimedia[0] = {};
							response.response.docs[0].multimedia[0].url = "../thought-image-url.png";

						}

							$scope.blogs = response.response.docs;
							$scope.$apply();
 				});

			};

			//first page call which sets page to 0

			$rootScope.addMoreItems(0)

		}
	};

});



