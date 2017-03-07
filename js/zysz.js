
var zyszCtrl={
	
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
					nowData=data[i].careersGradeList;
				}
			}

			//插入信息
			$box=$('#rowCont');
			var cell=$('#template').html();
			for(var j=0;j<nowData.length;j++){
				var $cell=$(cell);
				
				$cell.find('div').eq(0).html(nowData[j].date);
				$cell.find('div').eq(1).html(nowData[j].grade);
				$cell.find('div').eq(2).html(nowData[j].explain);
				
				$box.append($cell);
			}

		})
	},
	
	getScore:function(){
		this.getData(function(data){
					
			var nowData=null;//定义一个新对象
			var grade=null;
			//循环所有的data  如果login传过来的参数  等于data中参数   则当前的学生数据就是他
			for(var i=0;i<data.length;i++){
				if(user==data[i].nickname){
					nowData=data[i].careersGradeList;
				}
			}

			grade=nowData[0].totalGrade;//调用最近一次统计的分数
			
//				console.log(grade)
	    	var count=0;
	    	var bgColor="";
	        if(grade>85){
	        	bgColor="#58d2ad";
	        	$("#desc").css("color","#56d2ae").html("请继续保持良好的<br>考勤和学习状态");
	        	$("#fenshu").css("color","#56d2ae");
	        }
	        if(grade<=85&&grade>=80){
	        	bgColor="#fc5e5f";
	        	$("#desc").css("color","#fc5e5f").html("职业素质即将不满足<br>毕业标准请注意");
	        	$("#fenshu").css("color","#fc5e5f");
	        }
	        if(grade<80){
	        	bgColor="#bfbfbf";
	        	$("#desc").css("color","#bfbfbf").html("职业素质已经不满足<br>毕业标准请注意");
	        	$("#fenshu").css("color","#bfbfbf");
	        }
	        
	        $('#indicatorContainer').radialIndicator({
	            barColor: bgColor,
	            barBgColor:"#1d3362",
	            barWidth: 10,
	            //initValue: 40,
	            radius:84,
	            fontColor:"transparent",
	            roundCorner : true,
	       });
	       
	         var radialObj = $('#indicatorContainer').data('radialIndicator');
	         radialObj.animate(grade);
	         var time=setInterval(function(){
	    		count++;
	    		if(count>=grade){
	    			clearInterval(time);
	    			$("#fenshu").html(count);
	    		}
	    	},1)
		})	
	},
	
	
	goBack:function(){
		$('#goBack').find('a').attr('href','#/grade').click(function(){
//			alert(1)
			route('grade');
		})
	}
};


$(function(){
	zyszCtrl.goBack();
	zyszCtrl.getStudent();
	zyszCtrl.getScore();
	
})




