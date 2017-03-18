(function(){

	var app = angular.module('BudgetTool',[]);

	app.controller('TransController', function(){
		this.entries = transactions;
	});
	app.controller('CategoryController', function(){
		this.categories = categories;
	});
	app.controller('TabController', function(){

		this.tab = 1;

		this.isSet = function(checkTab){
			return this.tab === checkTab;
		};

		this.setTab = function(setTab){
			this.tab = setTab;
		};
	});

	app.directive('transactionList', function(){
		return {
			restrict: 'E',
			templateUrl: 'transactions.html'
		};
	});
	app.directive('newTransaction', function(){
		return {
			restrict: 'E',
			templateUrl: 'new_transaction.html'
		};
	});

	var transactions = [{
		date: 1397490980837,
		description: 'Einkauf Netto',
		amount: 8.70,
		category: 'Lebensmittel'
	},
	{
		date: 1397490980837,
		description: 'Einkauf Lidl',
		amount: 12.40,
		category: 'Lebensmittel'		
	}];

	var categories = [{
		name: 'Lebensmittel'
	},
	{
		name: 'Wohnung'
	},
	{
		name: 'Sonstiges'		
	}];

})();