var shopApp = angular.module('shopApp',[]);

shopApp.controller('shopController',['$scope',function($scope) {
	$scope.data = [
		{
			id:1,
			name:'毛衣',
			quantity:1,
			price:100
		},
		{
			id:2,
			name:'外套',
			quantity:2,
			price:200
		},
		{
			id:3,
			name:'羽绒服',
			quantity:3,
			price:300
		}
	];
	
	/*
	 	获得总数
	 */
	$scope.getTotality = function() {
		var totalityQuanlity = 0;
		angular.forEach($scope.data,function(item) {
			totalityQuanlity += parseInt(item.quantity);
		});
		
		return totalityQuanlity;
	}
	
	/*
	 	获得总价格
	 */
	$scope.getPrice = function() {
		var totalityPrice = 0;
		angular.forEach($scope.data,function(item) {
			totalityPrice += parseInt(item.quantity) * item.price;
		})
		return totalityPrice;
	}
	
	/*
	 	更新数量
	 * */
	$scope.getData = function(index,val) {
		if($scope.data[index].quantity + val > 10) {
			$scope.data[index].quantity = 10;
			alert('最多购买10件!');
			return;
		}
		
		if($scope.data[index].quantity + val <= 0) {
			if( confirm('是否删除商品？') ) {
				$scope.data.splice(index,1);
				
			}
			return;
		}
		$scope.data[index].quantity = parseInt($scope.data[index].quantity) + val;
	}
	
	/*
	 	删除
	 * */
	$scope.del = function(index) {
		if( confirm('确认删除商品吗？') ) {
			$scope.data.splice(index,1);
		}
	}
	
	/*
	 	data数据监听
	 * */
	$scope.$watch('data',function(newVal,oldVal) {
		angular.forEach($scope.data,function(item,index) {
			if(!item.quantity || item.quantity.toString().indexOf('.') != -1 || isNaN(item.quantity)) {
				alert('请输入正确数量！');
				item.quantity = oldVal[index].quantity;
			}
			
			if (item.quantity > 10 || item.quantity <= 0) {
				alert('请输入正确数量！');
				item.quantity = oldVal[index].quantity;
			}
		})
	},true);
}]);