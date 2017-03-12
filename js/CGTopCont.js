
var contCtrl={
	//获取并插入当前学生的作品信息
	getData:function (handler){
		$.ajax({
			type:"get",
			url:"data/cgtop.json",
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
				if(cgtopId==data[i].id){
					nowData=data[i];
				}
			}
			
//			console.log(nowCont)
			//将作品信息打印到页面中
			$('#cgtopCont .video').find('img').attr('src',nowData.contimg);
			$('#cgtopCont .cont').find('h3').html(nowData.title);
			$('#cgtopCont .cont').find('p').html(nowData.content);
			
		})
	},
	hint:function(){
		$('#cgtopCont .video').find('img').click(function(){
			var cell=$('#template').html();
			var $cell=$(cell);
			$('#box').append($cell);
			console.log(cell)
		});
		
		$('#box').on('click',$('.hint button'),function(){
			$('#box').html('')
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
	contCtrl.hint();

})
