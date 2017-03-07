
var gradeCtrl={
	
	//获取并插入当前学生信息
	getData:function (handler){
		$.ajax({
			type:"get",
			url:"data/studentData.json",
			success:function(data){
				handler(data);
			}
		})
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

			$('#gradeData').find('img').attr('src',nowData.avatar)
			$('#gradeData').find('h3').html(""+nowData.studentName+"<b><i></i><span>总排名："+nowData.classRanking+"</span><i></i></b>");
			$('#gradeData').find('p').eq(0).html(nowData.classTitle)
			$('#gradeData').find('p').eq(1).html("<i>作业提交率："+nowData.workRate+"%</i><i>考勤率："+nowData.attendanceRate+"%</i>");
			
			
			
			
			var grade=nowData.courseList;
//		console.log(grade)
			var $box=$('#major .canvas');
			
			var cell=$('#template').html();
			
			for(var k=0;k<grade.length;k++){
				
				var $cell=$(cell);
				
				$cell.find('a').html(grade[k].grade);

				$cell.find('a').attr('href','#/grade='+grade[k].courseId).data('courseId',grade[k].courseId).click(function(){
					courseId=$(this).data('courseId');
					route('gradeShare');
		})
				
				$box.append($cell)

			}

		})
	},
	
	
	goBack:function(){
		$('#goBack').find('a').attr('href','#/home').click(function(){
//			alert(1)
			route('home');
			route('footer',$('#footer'));
		})
	},
	
	goZysz:function(){
		$('#goZyse').find('a').attr('href','#/zysz').click(function(){
//			alert(1)
			route('zysz');
		})
	},
	goSet:function(){
		$('#gradeData').find('a').attr('href','#/set').click(function(){
		//alert(1)
			route('setting');
		})
	},
	share:function(){
		
	}

};


$(function(){
	gradeCtrl.goBack();
	gradeCtrl.goZysz();
	gradeCtrl.getStudent();
	gradeCtrl.goSet();
	gradeCtrl.share();

	
})




