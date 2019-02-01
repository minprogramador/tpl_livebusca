
// function loadUser() {
// 	var template = $('#template').html();
// 	Mustache.parse(template);   // optional, speeds up future uses
// 	var rendered = Mustache.render(template, {name: "Luke"});
// 	$('#target').html(rendered);
// }

var cap;

function loadcaptcha() {
	var keyCap = '6Ldz7oYUAAAAACDvUt-S_bT3cjIOgOxl2ar2fvd-';
	var cap = grecaptcha.render('submit', {
		'sitekey' :  keyCap,
		'callback' : login,
	});

	$('.grecaptcha-badge').appendTo("body");
}


function loadmain() {
	$.get('js/tpls/main.html', function(template) {
		var rendered = Mustache.render(template);
		$('#app').html(rendered);
		
		$.get('js/tpls/mainleft.html', function(template) {
			var titulo   = `Live Busca, seu sistema completo !`;
			var mensagem = `Somos uma empresa de Tecnologia da Informação genuinamente brasileira fornecedora de ferramentas para localização de pessoas e empresas para uso legal em todo o território nacional.`;
			var rendered = Mustache.render(template, {titulo: titulo, mensagem: mensagem});
			$('#boxleft').html(rendered);
		});

		$.get('js/tpls/login.html', function(template) {
			var rendered = Mustache.render(template);
			$('#boxmain').html(rendered);
			//loadcaptcha();
		});
  });
}


function login(token) {
	var usuario 	 = $("#usuario").val();
	var revendedor = $("#revendedor").val();
	var senha			 = $("#senha").val();

	var payload = {
		usuario: usuario,
		revendedor: revendedor,
		senha: senha,
		token: token
	}

	alert('login');
  
	// $.ajax({
	// 	method : "POST",
	// 	url : "./auth",
	// 	data : payload,
	// 	timeout: 8000,
	// })
	// .done(function(res) {
	// grecaptcha.reset(cap);

	// 	//console.log(res);
	// 	//console.log(res.token);
	// 	//console.log(res.msg);
	// 	//console.log(res.error);

	// 	if (res.error == true) {
			
	// 		if (res.msg) {
 //    			var msg = res.msg;
 //    		} else {
 //    			var msg = 'Usuario ou senha invalidos';
 //    		}
 //    		console.log('reset 71');
	// 	//	resetcap();

        
	// 		$('#alertt').show();
	// 		$('#alertt').addClass('alert-danger');
	// 		$('#message-alert').html('<strong>Ops!</strong> ' + msg);			
		
	// 	} else {

	// 		if (res.token) {
	// 			console.log('usuario ok, redirecionar para painel.');
	// 			$('#alertt').removeClass("alert-danger");
	// 			$('#alertt').show();
	// 			$('#alertt').addClass('alert alert-success');
	// 			$('#message-alert').html('Aguarde, redirecionando...');
	// 			document.cookie = 'token=' + res.token;
	// 			document.location = './Painel';
	// 		} else {
   
	// 			if (res.msg) {
	//     			var msg = res.msg;
	//     		} else {
	//     			var msg = 'Usuario ou senha invalidos';
	//     		}

	// 			console.log('reset 96');
	// 			//loadcaptcha();
	// 			//resetcap();
	        
	// 			$('#alertt').show();
	// 			$('#alertt').addClass('alert-danger');
	// 			$('#message-alert').html('<strong>Ops!</strong> ' + msg);			

	// 		}
	// 	}

	// })
	// .fail(function() {
	// 	console.log('reset 108');
	// 	//resetcap();
	// 	$('#alertt').show();
	// 	$('#alertt').addClass('alert-warning');
	// 	$('#message-alert').html('<strong>Ops!</strong> Sistema indisponivel, tente novamente em breve.');    
	// 	console.log('error ao buscar dados, demorou mais de 8s.....');

	// });
  
	console.log('executando ajax...');  
}


function loadFaleConosco() {
	$.get('js/tpls/contato.html', function(template) {
		var rendered = Mustache.render(template);
		$('#boxmain').html(rendered);
	});
}

function loadEsqueceuSenha() {
	$.get('js/tpls/recsenha.html', function(template) {
		var rendered = Mustache.render(template);
		$('#boxmain').html(rendered);
	});
}


