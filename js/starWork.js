
var workCtrl={
	
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
			
			var $work=$('#workBox');
			var cell=$('#templateWork').html();
			
			for(var i=0;i<data.length;i++){
				
				var $cell=$(cell);
				
				$cell.find('img').eq(0).attr('src',data[i].workImg);
				$cell.find('h3').html("<i><img src='"+data[i].headImg+"'/></i>"+data[i].authorName);
				$cell.find('p').html(data[i].classTitle);
				
				$cell.find('a').attr('href','#id='+data[i].id).data('id',data[i].id).click(function(){
					starWorksId=$(this).data('id');
					route('starWorkCont');
				})
				
				$work.append($cell);
				
			}
		})
	},
	
	goBack:function(){
		$('#goBack').find('a').attr('href','#/home?nickname=likang').click(function(){
			route('home');
			route('footer',$('#footer'));
		})
	},
	goSearch:function(){
		$('#search').find('a').attr('href','#/search').click(function(){
			route('search');
			route('footer',$('#footer'))
		})
	}
};


$(function(){
	workCtrl.goBack();
	workCtrl.insertWork();
	workCtrl.goSearch();
	
})