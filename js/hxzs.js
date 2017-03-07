
var hxzsCtrl={
	goBack:function(){
		$('#goBack').find('a').attr('href','#/home?nickname=likang').click(function(){
//			alert(1)
			route('home');
			route('footer',$('#footer'));
		})
	},
	getShu:function(){
		//获取时间
		var oDate=new Date();
		
		var year=oDate.getFullYear();
		var month=oDate.getMonth();// 0-11
		var day=oDate.getDate();
		var week=oDate.getDay();
		var hour=oDate.getHours();
		var minutes=oDate.getMinutes();
		var seconds=oDate.getSeconds();
		var time=oDate.getTime();

		var cell=$('#templateRow').html();
		$('#textarea').change(function(){
			
			var $textLen=$('#textarea').val().length;
			
			if($textLen<=0){
				$('#messBtn').css('disabled',true);
			}else{
				$('#messBtn').click(function(){

					var $cell=$(cell);
					$cell.find('div').eq(0).html("<span>"+hour+":"+minutes+"</span><p>"+year+"/"+(month+1)+"/"+day+"</p>");
					$cell.find('div').eq(3).hide();
					$('#rowBox').append($cell);
					$('#textarea').val('')
					$('#textarea').val().length==0;
					console.log($textLen)
					console.log($('#textarea').val().length==0)
					$('#messBtn').css('disabled',true);
				})
			}
			
			//评价
//			for(var i=0;i<$('#rowBox .row').length;i++){
//				var $pBtn=$('#rowBox').find('.row').eq(i);
//				
//				$('#rowBox').on('click',$pBtn,function(){
//					alert(1)
//				})
//				
//				
//			}
			
			
			
			
		})
		
		
	},
};


$(function(){
	hxzsCtrl.goBack();
	hxzsCtrl.getShu();
	
})



