
//加载模块
function route(mode,box){
	if(box===undefined)box=$('#content');
	$.ajax({
		type:"get",
		url:"view/"+mode+".html",
		async:true,
		success:function(data){
			box.html(data);
			//加载 JS
			getJs(mode);
		}
	});
};


//加载JS函数
function getJs(mode){
	$.ajax({
		type:"get",
		url:"js/"+mode+".js",
		dataType:'script'
	});
}

//定义全局作品ID
var worksId;//作品盒子
var starWorksId;//五星作品
var xygbId;//校园广播
var hdtzId;//活动通知
var courseId;//活动通知

var user;//当前登录用户


$(function(){
	//加载首页
	route('login')

	$('footer').find('li').each(function(index){
		$(this).click(function(){
			$('footer').find('li').removeClass('ac').eq(index).addClass('ac');
		})
	})
})
