
var setCtrl={
	
	goBack:function(){
		$('#goBack').find('a').attr('href','#/set').click(function(){
//			alert(1)
			route('setting');
		})
	},
};


$(function(){
	setCtrl.goBack();

})




