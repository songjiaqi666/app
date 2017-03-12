
var homeCtrl={

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
			}
			
//			console.log(nowData)

			$('#header #set').find('img').attr('src',nowData.avatar)
			$('#header>div').eq(1).html('<h2>'+nowData.studentName+'<span>总排名:<i>'+nowData.classRanking+'</i></span></h2><p>平均成绩:<i>'+nowData.averageGrade+'</i></p><p>职业素质:<i>'+nowData.careersGrade+'</i></p>');
		})
	},
	
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
					nowWork=data[i].workList;
				}
			}
			
//			console.log(nowWork)
			
			var $work=$('#work .workList');
			var cell=$('#templateWork').html();
			
			//console.log(data)
			//仅限插入4条
			for(var i=0;i<4;i++){
				
				var $cell=$(cell);
				
				$cell.find('img').attr('src',nowWork[i].workImg);
				$cell.find('h5').html(nowWork[i].authorName);
				$cell.find('p').html(nowWork[i].classTitle);
				
				
				
				$cell.find('a').attr('href','#id='+nowWork[i].id).data('id',nowWork[i].id).click(function(){
					worksId=$(this).data('id');
					route('workCont');
					$('#footer').html('');
				})
				
				$work.append($cell);
			}
		})
	},
	
	//获取并插入五星作品信息
	getStar:function (handler){
		$.ajax({
			type:"get",
			url:"data/starWorks.json",
			success:function(data){
				handler(data);
			}
		});
	},
	insertStar:function (){
		this.getStar(function(data){
			
			var $star=$('#star .workList');
			var cell=$('#templateStar').html();
			
//			console.log(data)
			//仅限插入4条
			for(var i=0;i<2;i++){
				
				var $cell=$(cell);
				
				$cell.find('img').attr('src',data[i].headImg);
				$cell.find('h5').html(data[i].authorName);
				$cell.find('p').html(data[i].classTitle);
				
				$cell.find('a').attr('href','#id='+data[i].id).data('id',data[i].id).click(function(){
					starWorksId=$(this).data('id');
					route('starWorkCont');
					$('#footer').html('');
				})
				
				$star.append($cell);
			}
		})
	},
	
	//点击头像，跳转设置页面
	goSet:function(){
		var $oBtn=$('#set').find('a');
		$oBtn.attr('href','#set').click(function(){
			route('setting')
			$('#footer').html('');
		})
	},
	
	//点击作品盒子  开启 按钮 跳转作品盒子列表页
	goWorks:function(){
		var $oBtn=$('#work .more').find('a');
		$oBtn.attr('href','#work').click(function(){
			route('work')
			$('#footer').html('');
		})
		
		
		var $oBtn=$('#star .more').find('a');
		$oBtn.attr('href','#starWork').click(function(){
			route('starWork')
			$('#footer').html('');
		})

	},
	
	//点击顶部向下的箭头  跳转到当前学生的成绩页面
	goGrade:function(){
		var $oBtn=$('#goGrade').find('a');
		$oBtn.attr('href','#/grade').click(function(){
			route('grade')
			$('#footer').html('');
		})
	},

};

$(function(){
	
	homeCtrl.goSet()//跳转设置页面
	homeCtrl.goWorks()//跳转作品盒子列表页
	homeCtrl.goGrade()//跳转学生成绩页面
	homeCtrl.getStudent()//获取学生信息
	homeCtrl.insertWork()//插入作品盒子信息
	homeCtrl.insertStar()//插入五星作品

})



