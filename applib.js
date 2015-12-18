angular.module('stam',[])
	.service('service2',function(){
		return function(){ return 5;}
	}); 
	
	
	
		
angular.module('helloWorldApp',['stam'])
	.controller('HelloWorldCtrl',['$scope','service1', 'service2', function($scope, service1, service2){
		$scope.helloMsg="Hello World" + service1.Five()+","+ service1.Six()+","+service2();
	}]).service('service1',function(){
		var value=5;
		return{
			Five:function(){return 5;},
			Six:function(){return 6;}
		};
	});
	

