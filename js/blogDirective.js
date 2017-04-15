
var display = {
	bindings:{
		type: '=',
		search: '=',
		query: '='
	},
	//Controller for article results
	controller: function($rootScope, $scope, $attrs, Blogs){
		let q = this;
				$rootScope.page = 0;
				//order for page number variable
			$rootScope.addMoreItems = function(order){
	
						if(!order){
							order = 0;
							$rootScope.page = 0;
						}
						if(order == 0){
							$('.card-wrapper').html('');
							$rootScope.page = 0;
						}
					$rootScope.page += parseInt(order);
				// NYT API callback function and image provider
			Blogs.getBlogs($attrs.type, $attrs.search, q.query, $rootScope.page, $rootScope.toggle, function(response){

					for(let i = 0; i <=response.response.docs.length; i++)
						{
							let items = response.response.docs[i];		
							if(!items) continue 
								let title = items.headline.main.split(";");
								items.index = i;
								items.title = title[0];
							if(items.multimedia == undefined || items.multimedia.length == 0){
								items.multimedia.push({url: $scope.getRandomImage()}) 
							}
							else{
								items.multimedia[0].url = "http://nytimes.com/" + items.multimedia[0].url;
							}
							if(!$scope.blogs){
								$scope.blogs = [];
							}
							$scope.blogs.push(items);
						}

							$scope.$apply();

 				});

		}
			$scope.getRandomImage = function(){
					let imageArray = ['../thought-image-url.png', '../news1.jpg', '../news2.jpg', '../news3.jpg', '../news4.png', '../news5.jpg'];
						let image = imageArray[Math.floor(Math.random() * imageArray.length)]; 
						return image;
				}
			//first page call which sets page to 0
			setTimeout(function(){ $rootScope.addMoreItems(0) }, 1000);
		},
		templateUrl: "blogDirective.html"
}

angular.module('blogDirective', [])
.component('blogContent', display)
		
