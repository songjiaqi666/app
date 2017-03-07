
/*获取屏幕的宽度*/
(function(){
	var viewW=document.documentElement.clientWidth;
	var oHtml=document.documentElement;
	oHtml.style.fontSize=viewW/7.2+'px';
//	console.log(oHtml.style.fontSize)
})()

//window.onload=function(){
//	//首页 考勤提醒
//	(function(){
//		//创建对象
//		var oApp=document.getElementById('app');
//		var oDiva=document.createElement("div");
//		var oDivb=document.createElement("div");
//		//添加class
//		oDiva.className='modal';
//		oDivb.className='hint';
//		//填充html
//		oDiva.innerHTML='';
//		oDivb.innerHTML='<p>由于你已连续三天没有考勤纪录<br />为避免可能发生的安全问题<br />系统将要联系你的紧急联系人</p><button type="button">知道了</button>';
//		//插入对象
//		oApp.appendChild(oDiva);
//		oApp.appendChild(oDivb);
//		//删除对象
//		var oBtn=oDivb.getElementsByTagName("button")[0];
//		oBtn.onclick=function(){
//			oApp.removeChild(oDiva);
//			oApp.removeChild(oDivb);
//		}
//	})()
//	
//
//}
