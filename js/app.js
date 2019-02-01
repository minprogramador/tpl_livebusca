
// function loadUser() {
// 	var template = $('#template').html();
// 	Mustache.parse(template);   // optional, speeds up future uses
// 	var rendered = Mustache.render(template, {name: "Luke"});
// 	$('#target').html(rendered);
// }

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
			//onload();



		});
  });
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


// function onSubmit(token) {
//     alert('Thanks ' + document.getElementById('usuario').value + '!');
//   }

//   function validate(event) {
//     event.preventDefault();
//     if (!document.getElementById('usuario').value) {
//       alert("Please enter your name.");
//     } else {
//       grecaptcha.execute();
//     }
//   }

//   function onload() {
//     var element = document.getElementById('submit');
//     element.onclick = validate;
//   

