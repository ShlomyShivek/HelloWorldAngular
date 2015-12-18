angular.module('stam',[])
	.service('service2',function(){
		return function(){ return 5;}
	}); 
	