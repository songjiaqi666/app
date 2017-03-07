
var errorCtrl={


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

			$('#password .loginBtn').find('a').attr('href','#/home?').click(function(){
				var $user=$('#password .user').val();
				var $password=$('#password .password').val();
				
				if($user==data.nickname&&$password==data.token){
						route('home');
						route('footer',$('#footer'));
					}else{
						route('home');
					}
			})
		})
	},
	goBack:function(){
		$('#goBack').find('a').attr('href','#/home').click(function(){
//			alert(1)
			route('login');
		})
	},


}



	errorCtrl.getData();
	errorCtrl.goBack();



