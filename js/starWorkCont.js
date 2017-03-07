//设置头部点赞
$('#head').find('div').hide().eq(0).show();

var contCtrl={
	//获取并插入当前学生的作品信息
	getWork:function (handler){
		$.ajax({
			type:"get",
			url:"data/starWorks.json",
			success:function(data){
				handler(data);
			}
		});
	},
	insertWork:function (){
		this.getWork(function(data){
			
			var starWorks=null;

			//根据传递的 ID参数  找到当前作品
			for(var i=0;i<data.length;i++){
				
				
				if(starWorksId==data[i].id){
					starWorks=data[i];
				}
			}
			
//			console.log(nowCont)
			//将作品信息打印到页面中
			$('#Wtitle').find('h3').html(starWorks.workTitle);
			$('#Wtitle li').eq(0).find('span').html(starWorks.browse);
			$('#Wtitle li').eq(1).find('span').html(starWorks.like);
			$('#Whead').html("<i><img src='"+starWorks.headImg+"'/></i><span>"+starWorks.authorName+"</span> "+starWorks.classTitle+"");
			$('#Wcont').find('img').attr('src',starWorks.workContImg);
			
			
			//点赞功能
			
			$('#thumbs').find('i').click(function(){
				var like=starWorks.like;
				like++
	//			console.log(like)
				$('#thumbs-up').html(like);
				$('#head').find('div').show().eq(0).hide();
				
				//插入分享菜单
				$('#share').click(function(){
					//插入模态层  和分享菜单
					var $cell=$('#template').html();
					$('#workCont').append($cell)
				})
				
				//删除分享菜单
				$('#workCont').on('click',$('#shareT button'),function(){
					$('.modal').remove();
					$('#shareT').remove();
				})
				
			});
			
		})
	},
	
	
	goBack:function(){
		$('#goBack').find('a').attr('href','#/work').click(function(){
			route('starWork');
		})
	},
	
}

$(function(){
	contCtrl.insertWork();
	contCtrl.goBack();

})
