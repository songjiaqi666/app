
var workCtrl={
	
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
			var nowWork=null;
			
			for(var i=0;i<data.length;i++){
				if(user==data[i].nickname){
					nowWork=data[i];
				}
			}
			
//			console.log(nowWork)
			
			var $work=$('#workBox');
			var cell=$('#templateWork').html();
			
			//console.log(data)
			var works=nowWork.workList;
			
			//仅限插入
			for(var i=0;i<nowWork.workList.length;i++){
				
				var $cell=$(cell);
				
				$cell.find('img').eq(0).attr('src',works[i].workImg);
				$cell.find('h3').html("<i><img src='"+nowWork.headImg+"'/></i>"+works[i].authorName);
				$cell.find('p').html(works[i].classTitle);
				
				$cell.find('a').attr('href','#id='+works[i].id).data('id',works[i].id).click(function(){
					worksId=$(this).data('id');
					route('workCont');
				})
				
				$work.append($cell);
			}
		})
	},
	
	
	goBack:function(){
		$('#goBack').find('a').attr('href','#/home?nickname=likang').click(function(){
//			alert(1)
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