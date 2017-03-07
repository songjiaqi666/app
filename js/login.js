


$('#login .user').find("input[type='text']").change(function(){
	
	var $user=$('#login .user').find('input').val();
	$user=$('#login .user').find('input').val();
	console.log($user);
	
})

$('#login .password').find("input[type='password']").change(function(){
	
	var $password=$('#login .password').find('input').val();
	$password=$('#login .password').find('input').val();
	console.log($password);
	
})



var loginCtrl={

	login:function (handler){
		$.ajax({
			type:"get",
			url:"data/login.json",
			success:function(data){
				handler(data);
			}
		});
	},
	
	getData:function (){
		this.login(function(data){

			$('#login .loginBtn').find('a').attr('href','#/home?nickname=likang').data('nickname','likang').click(function(){
				
				var $user=$('#login .user').find('input').val();
				var $password=$('#login .password').find('input').val();
				
//				console.log("用户名："+$user)

				if($user==data.nickname&&$password==data.token){
				
//				if($user==1&&$password==1){
					
						user=$(this).data('nickname');
						route('home');
						route('footer',$('#footer'));
					}else{
						alert('用户名或密码错误');
					}
			})
		})
	},
	

}



	loginCtrl.getData();


