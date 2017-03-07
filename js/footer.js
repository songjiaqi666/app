
$(function(){
	var $oBtn=$('#footer').find('a');
	
	//首页
	$oBtn.eq(0).attr('href','#/home?nickname=likang').click(function(){
		route('home')
	})
	
	//火星助手
	$oBtn.eq(1).attr('href','#hxzs').click(function(){
		route('hxzs')
		$('#footer').html('');
	})
	
	//社区
	$oBtn.eq(2).attr('href','#shequ').click(function(){
		route('shequ')
	})

})
