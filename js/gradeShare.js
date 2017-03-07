
var gradeCtrl={
	//获取并插入当前学生的作品信息
	getWork:function (handler){
		$.ajax({
			type:"get",
			url:"data/studentData.json",
			success:function(data){
				handler(data);
			}
		});
	},
	
	insertWork:function (){
		this.getWork(function(data){
	
			var nowData=null;
			var gradeList=null;
			var gradeCont=null;
	
	
			//根据名字找到作品库
			for(var i=0;i<data.length;i++){
				if(user==data[i].nickname){
					nowData=data[i];
					gradeList=data[i].courseList;
				}
			}
	//			console.log(gradeList)
			//根据传递的 ID参数  找到当前作品
			for(var j=0;j<gradeList.length;j++){
				if(courseId==gradeList[j].courseId){
					gradeCont=gradeList[j];
				}
			}
	
			//将作品信息打印到页面中
			$('#cont').find('h3').html(nowData.studentName);
			$('#cont').find('.kc').html(gradeCont.coureTitle);
			$('#cont').find('.jb').html("击败了<span>"+gradeCont.classBeatRate+"<i>%</i></span>的同学");
			$('#cont').find('.plus').html(gradeCont.grade);
				
		})
	},
	share:function(){
		
		$('#share').click(function(){
			var cell=$('#template').html();
			var $cell=$(cell);
			$('#box').append($cell);
		});
		
		$('#box').on('click',$('#shareDown'),function(){
			$('#box').html('');
		});
		
		//插入链接
		
		

		$('#box').on('click',$('#getLink'),function(){
			var link=$('#templateLink').html();
			var $link=$(link);
			$('#box').html($link);

			var timer;
			timer=setInterval(function(){
				$('#box').html('');
				clearInterval(timer)
			},1000)
		})
	},
	
	
	goBack:function(){
		$('#gotoBack').find('a').attr('href','#/grade').click(function(){
			route('grade');
		})
	},
}

$(function(){
	gradeCtrl.insertWork();
	gradeCtrl.goBack();
	gradeCtrl.share();
})
