
var contCtrl={
	//获取并插入当前学生的作品信息
	getData:function (handler){
		$.ajax({
			type:"get",
			url:"data/school.json",
			success:function(data){
				handler(data);
			}
		});
	},
	insertWork:function (){
		this.getData(function(data){
			

//			console.log(workList)

			var nowData=null;
			
			//根据传递的 ID参数  找到当前作品
			for(var i=0;i<data.length;i++){
				if(xygbId==data[i].id){
					nowData=data[i];
				}
			}
			
//			console.log(nowCont)
			//将作品信息打印到页面中
			$('#xygbCont .Xtitle').find('h3').html(""+nowData.title+"<a href='javascript:;'>"+nowData.type+"</a>");
			$('#xygbCont .Xtitle').find('p').html("<span>"+nowData.createTime+"</span>"+nowData.time+"");
			$('#xygbCont .Xcont').find('p').html(nowData.content);
			
		})
	},
	
	
	goBack:function(){
		$('#goBack').find('a').attr('href','#/shequ').click(function(){
			route('shequ');
			route('footer',$('#footer'));
		})
	},
	
}

$(function(){
	contCtrl.insertWork();
	contCtrl.goBack();

})
