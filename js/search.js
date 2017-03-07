
var homeCtrl={
	set:function(){
		var $oBtn=$('#set').find('a').eq(0);
		$oBtn.attr('href','#set').click(function(){
			route('setting')
			route('footer',$('#footer'))
		})
		
	}
};


$(function(){
	homeCtrl.set()
})



