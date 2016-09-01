angular.module('blogDirective', [])
.directive('blogContent', function(){

	return{
		restrict: 'E',
		scope: {
			type: '=',
			search: '=',
			query: '='
			},

		templateUrl: "blogDirective.html",

			//Controller for article results

		controller: function($rootScope, $scope, $attrs, Blogs){

			 $scope.$watch('query', function(newValue, oldValue) {
                
                if (newValue)

                    $rootScope.addMoreItems();
            		
            		}, true);

				
				$rootScope.page = 0;

				//order for page number variable
				
			$rootScope.addMoreItems = function(order){

     					
						if(!order){
							order = 0;
						}

					$rootScope.page += parseInt(order);

					// NYT API callback function and image provider

				Blogs.getBlogs($attrs.type, $attrs.search, $scope.query, $rootScope.page, function(response){

					for(var i = 0; i <=response.response.docs.length; i++)

						{


							var items = response.response.docs[i];
								
							if(!items) continue 

								var title = items.headline.main.split(";");

								items.index = i;
								items.title = title[0];
								//console.log(i);

							if(items.multimedia == undefined || items.multimedia.length == 0){

								items.multimedia.push({url: $scope.getRandomImage()}) 

							}

							else{

								items.multimedia[0].url = "http://nytimes.com/" + items.multimedia[0].url;
							}

							console.log(items);

							if(!$scope.blogs){

								$scope.blogs = [];
							}

							$scope.blogs.push(items);
						}
							
							$scope.$apply();
 				});

			};

			$scope.getRandomImage = function(){

					var imageArray = ['../thought-image-url.png', '../news1.jpg', '../news2.jpg', '../news3.jpg', '../news4.png', '../news5.jpg'];

						var image = imageArray[Math.floor(Math.random() * imageArray.length)]; 

						return image;

				}

			//first page call which sets page to 0

			$rootScope.addMoreItems(0)

		}


	};

});



