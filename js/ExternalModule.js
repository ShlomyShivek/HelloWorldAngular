angular.module('stam',[])
	.service('service2',function(){
		return function(){ return 'hello from external module';}
	}); 
	