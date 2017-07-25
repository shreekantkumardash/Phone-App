// Define a new module for our app
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller

function InstantSearchController($scope){

	$scope.callUser= function(v){
		console.log("v",v)
		alert("Calling...." + v);
	}

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.

	$scope.items = [
		{
			url: 'http://www.tutorialspoint.com/android/',
			title: 'Anurag',
			ph: '8904889363'
		},
		{
			url: 'http://www.tutorialspoint.com/angularjs/',
			title: 'Baisakhi ',
			ph: '8893654215'
		},
		{
			url: 'http://www.tutorialspoint.com/html5/',
			title: 'Chiranjivi',
			ph: '7789991234'
		},
		{
			url: 'http://www.tutorialspoint.com/css/',
			title: 'Debasish',
			ph: '9976465121'
		},
		{
			url: 'http://www.tutorialspoint.com/java/',
			title: 'Elena',
			ph: '9784563215'
		},
		{
			url: 'http://www.tutorialspoint.com/joomla/',
			title: 'Farhan',
			ph: '7789945562'
		},
		{
			url: 'http://www.tutorialspoint.com/html/',
			title: 'Gaurish ',
			ph: '9874561235'
		},
		{
			url: 'http://www.tutorialspoint.com/android/',
			title: 'Harsh',
			ph: '9865542152'
		},
		{
			url: 'http://www.tutorialspoint.com/angularjs/',
			title: 'Ishan ',
			ph: '8893654215'
		},
		{
			url: 'http://www.tutorialspoint.com/html5/',
			title: 'Jay',
			ph: '8793657215'
		},
		{
			url: 'http://www.tutorialspoint.com/css/',
			title: 'Karan',
			ph: '8893654215'
		},
		{
			url: 'http://www.tutorialspoint.com/java/',
			title: 'Likshit',
			ph: '8893654215'
		},
		{
			url: 'http://www.tutorialspoint.com/joomla/',
			title: 'Manpreet',
			ph: '8893654215'
		},
		{
			url: 'http://www.tutorialspoint.com/html/',
			title: 'Nauman ',
			ph: '8793654215'
		},
		{
			url: 'http://www.tutorialspoint.com/android/',
			title: 'Ontora',
			ph: '8563654215'
		},
		{
			url: 'http://www.tutorialspoint.com/angularjs/',
			title: 'Parush ',
			ph: '8893654215'
		},
		{
			url: 'http://www.tutorialspoint.com/html5/',
			title: 'Qutub',
			ph: '9983654215'
		},
		{
			url: 'http://www.tutorialspoint.com/css/',
			title: 'Roshan',
			ph: '8003654215'
		},
		{
			url: 'http://www.tutorialspoint.com/java/',
			title: 'Shreekant',
			ph: '9793654215'
		},
		{
			url: 'http://www.tutorialspoint.com/joomla/',
			title: 'Trishna',
			ph: '7693654215'
		},
		{
			url: 'http://www.tutorialspoint.com/html/',
			title: 'Upsana ',
			ph: '8893654215'
		},{
			url: 'http://www.tutorialspoint.com/android/',
			title: 'Vikram',
			ph: '7793654215'
		},
		{
			url: 'http://www.tutorialspoint.com/angularjs/',
			title: 'Wanashree ',
			ph: '8593654215'
		},
		{
			url: 'http://www.tutorialspoint.com/html5/',
			title: 'X-man',
			ph: '8993654215'
		},
		{
			url: 'http://www.tutorialspoint.com/css/',
			title: 'Yashodhara',
			ph: '9893654215'
		},
		{
			url: 'http://www.tutorialspoint.com/java/',
			title: 'Zakrir',
			ph: '8093654215'
		}
	];
 
}
