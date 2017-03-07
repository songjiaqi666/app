
var setCtrl={
	
	//获取并插入当前学生信息
	getData:function (handler){
		$.ajax({
			type:"get",
			url:"data/studentData.json",
			success:function(data){
				handler(data);
			}
		});
	},
	
	getStudent:function (){
		this.getData(function(data){
			
			var nowData=null;//定义一个新对象
			
			//循环所有的data  如果login传过来的参数  等于data中参数   则当前的学生数据就是他
			for(var i=0;i<data.length;i++){
				if(user==data[i].nickname){
					nowData=data[i];
				}
			};
			
			$('#setCont .headPic').find('img').attr('src',nowData.avatar)
		})
	},
	
	//退出登录
	goOut:function(){
		$('#setCont li').eq(3).click(function(){
			var cell=$('#templateOut').html();
			var $cell=$(cell);
			$('#box').append($cell);
		});
		
		//删除分享菜单
		$('#box').on('click',$('#hint button'),function(){
			$('#box').html('')
		})

	},
	
	//修改头像
	getHead:function(){
		$('#setCont li').eq(0).click(function(){
			var cell=$('#templateHead').html();
			var $cell=$(cell);
			$('#box').append($cell);
		});
		
		//删除分享菜单
		$('#box').on('click',$('#revision p'),function(){
			$('#box').html('')
		})
	},
	
	//修改密码
	setPassword:function(){
		$('#setCont li').eq(1).click(function(){
			route('setPassword');
		});
		
	},
	
	goBack:function(){
		$('#goBack').find('a').attr('href','#/home?nickname=likang').click(function(){
//			alert(1)
			route('home');
			route('footer',$('#footer'));
		})
	},
	
};


$(function(){
	setCtrl.goBack();
	setCtrl.getStudent();
	setCtrl.getHead();
	setCtrl.goOut();
	setCtrl.setPassword();
	
})




