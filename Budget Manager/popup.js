$(function(){

	chrome.storage.sync.get(["total","limit"],function(budget){
		$("#total").text(budget.total);
		$("#limit").text(budget.limit);
	});

	$('#spend').click(function () {
		chrome.storage.sync.get(['total','limit'],function(budget) {
			var newTotal = 0 ;
			if(budget.total){
				newTotal += parseInt(budget.total);
			}

			var amount = $('#amount').val();
			if(amount){
				newTotal += parseInt(amount);
			}

			chrome.storage.sync.set({'total':newTotal},function() {
				if(amount && newTotal >= budget.limit){
					var noti = {
						type :'basic',
						iconUrl:'change64.png',
						title:'Limit reached!',
						message: 'You have reached the limit'
					};
					chrome.notifications.create('limitNot',noti);
				}
			});

			$('#total').text(newTotal);
			$('#amount').val('');
		});
	});
});