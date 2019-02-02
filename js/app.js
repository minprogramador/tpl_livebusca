
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


