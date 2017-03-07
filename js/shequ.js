
var sqCtrl={
	
	//获取并插入当前校园广播
	getData:function (handler){
		$.ajax({
			type:"get",
			url:"data/school.json",
			success:function(data){
				handler(data);
			}
		});
	},
	
	getStudent:function (){
		this.getData(function(data){
			
			var $box=$('#tabCont .xygb').find('ul');
			console.log($box)
			var cell=$('#templateXygb').html();
			
			//循环所有的data  如果login传过来的参数  等于data中参数   则当前的学生数据就是他
			for(var i=0;i<data.length;i++){
				var $cell=$(cell);
				
				$cell.find('.bt').html("<a>"+data[i].title+"</a><span>"+data[i].createTime+"</span>");
				$cell.find('h3').html("<a href=''>"+data[i].type+"</a>");
				$cell.find('p').html(data[i].content);
				
				$cell.find('a').attr('href','#id='+data[i].id).data('id',data[i].id).click(function(){
					xygbId=$(this).data('id');
					route('xygbCont');
				})
				
				$box.append($cell)
				
			}

		})
	},
	
	
	
	//获取并插入当前活动通知
	getHdtz:function (handler){
		$.ajax({
			type:"get",
			url:"data/hdtz.json",
			success:function(data){
				handler(data);
			}
		});
	},
	
	insertHdtz:function (){
		this.getHdtz(function(data){
			
			var $box=$('#tabCont .hdtz');
//			console.log($box)
			var cell=$('#templateHdtz').html();
			
			//循环所有的data  如果login传过来的参数  等于data中参数   则当前的学生数据就是他
			for(var i=0;i<data.length;i++){
				var $cell=$(cell);
				
				$cell.find('dd').html("<img src='"+data[i].srcimg+"'/><div class='ac'><img src='images/hdjs_03.png'/>");
				
				$cell.find('dt').html("<h3>"+data[i].title+"</h3><p>"+data[i].content+"</p><p class='clearfix'><span class='fl'><i class='dizhiIcon'></i>"+data[i].type+"</span><span class='fr'><i class='timeIcon'></i>"+data[i].createTime+"</span></p>");
			
				$cell.find('a').attr('href','#id='+data[i].id).data('id',data[i].id).click(function(){
					hdtzId=$(this).data('id');
					route('hdtzCont');
				})
				
				$box.append($cell)
				
			}

		})
	},
	

	
	tab:function(){
		$('#tabCont .tabItem').eq(0).show();
		$('#headTab').find('li').each(function(index){
			$(this).click(function(){
				$('#headTab').find('li').removeClass('ac').eq(index).addClass('ac');
				$('#tabCont .tabItem').hide().eq(index).show();
			})
		})
	},
		
}
$(function(){
	sqCtrl.tab()
	sqCtrl.getStudent()
	sqCtrl.insertHdtz()
})



