//设置头部点赞
$('#head').find('div').hide().eq(0).show();

var contCtrl={
	//获取并插入当前学生的作品信息
	getWork:function (handler){
		$.ajax({
			type:"get",
			url:"data/works.json",
			success:function(data){
				handler(data);
			}
		});
	},
	insertWork:function (){
		this.getWork(function(data){
			
			var nowData=null;
			var workList=null;
			var nowCont=null;
			
			//根据名字找到作品库
			for(var i=0;i<data.length;i++){
				if(user==data[i].nickname){
					nowData=data[i];
					workList=data[i].workList;
				}
			}
//			console.log(workList)
			//根据传递的 ID参数  找到当前作品
			for(var i=0;i<workList.length;i++){
				if(worksId==workList[i].id){
					nowCont=workList[i];
				}
			}
			
//			console.log(nowCont)
			//将作品信息打印到页面中
			$('#Wtitle').find('h3').html(nowCont.workTitle);
			$('#Wtitle li').eq(0).find('span').html(nowCont.browse);
			$('#Wtitle li').eq(1).find('span').html(nowCont.like);
			$('#Whead').html("<i><img src='"+nowData.headImg+"'/></i><span>"+nowCont.authorName+"</span> "+nowCont.classTitle+"");
			$('#Wcont').find('img').attr('src',nowCont.workContImg);
			
			
			//点赞功能
			
			$('#thumbs').find('i').click(function(){
				var like=nowCont.like;
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
			route('work');
		})
	},
	
}

$(function(){
	contCtrl.insertWork();
	contCtrl.goBack();

})
