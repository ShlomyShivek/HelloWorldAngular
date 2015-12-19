	
	
		
angular.module('helloWorldApp',['stam'])
	.controller('HelloWorldCtrl',['$scope','service1', 'service2', function($scope, service1, service2){
		$scope.helloMsg="Hello World, " + service1.Five()+","+ service1.Six()+","+service2();
	}]).service('service1',function(){
		var value=5;
		return{
			Five:function(){return "hello from service1.Five()";},
			Six:function(){return "hello from service1.Six()";}
		};
	});
	

