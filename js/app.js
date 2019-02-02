
// function loadUser() {
// 	var template = $('#template').html();
// 	Mustache.parse(template);   // optional, speeds up future uses
// 	var rendered = Mustache.render(template, {name: "Luke"});
// 	$('#target').html(rendered);
// }
var demo1Call = 0;
var demo2Call = 0;
var demo3Call = 0;
var $key = '6Ldz7oYUAAAAACDvUt-S_bT3cjIOgOxl2ar2fvd-';


function loadcaptcha() {

	$('#demo-form1').validator().on('submit', function (e) {
    
    	if (e.isDefaultPrevented()) {
        	// handle the invalid form...
            console.log("validation failed");
        } else {
        	// everything looks good!
            demo1Call = 1;
            $(document).find('#recaptcha1').remove();
            console.log($(document).find('#recaptcha1'))
            $('#demo-form1').append("<div id='recaptcha1' ></div>");
			
			e.preventDefault();
            console.log("validation success");
            if (typeof widgetId1 != 'undefined')
            	grecaptcha.reset(widgetId1);
            
            if (demo1Call == 1)
            {
            	widgetId1 = grecaptcha.render('recaptcha1', {
                	'sitekey': $key,
                    'callback': login,
                    'size': "invisible"
                });
            }

            grecaptcha.reset(widgetId1);
			
			grecaptcha.execute(widgetId1);
            console.log('show');
        }
    });


	$('#frmRecSenha').validator().on('submit', function (e) {
    
    	if (e.isDefaultPrevented()) {
        	// handle the invalid form...
            console.log("validation failed");
        } else {
        	// everything looks good!
            demo2Call = 1;
            $(document).find('#recaptchaRecSenha').remove();
            console.log($(document).find('#recaptchaRecSenha'))
            $('#frmRecSenha').append("<div id='recaptchaRecSenha' ></div>");
			
			e.preventDefault();
            console.log("validation success");
            if (typeof widgetId2 != 'undefined')
            	grecaptcha.reset(widgetId2);
            
            if (demo2Call == 1)
            {
            	widgetId2 = grecaptcha.render('recaptchaRecSenha', {
                	'sitekey': $key,
                    'callback': recSenha,
                    'size': "invisible"
                });
            }

            grecaptcha.reset(widgetId2);
			
			grecaptcha.execute(widgetId2);
            console.log('show');
        }
    });

	$('#frmContato').validator().on('submit', function (e) {
    
    	if (e.isDefaultPrevented()) {
        	// handle the invalid form...
            console.log("validation failed");
        } else {
        	// everything looks good!
            demo3Call = 1;
            $(document).find('#recaptchaContato').remove();
            console.log($(document).find('#recaptchaContato'))
            $('#frmContato').append("<div id='recaptchaContato'></div>");
			
			e.preventDefault();
            console.log("validation success");
            if (typeof widgetId3 != 'undefined')
            	grecaptcha.reset(widgetId3);
            
            if (demo3Call == 1)
            {
            	widgetId3 = grecaptcha.render('recaptchaContato', {
                	'sitekey': $key,
                    'callback': contato,
                    'size': "invisible"
                });
            }

            grecaptcha.reset(widgetId3);
			
			grecaptcha.execute(widgetId3);
            console.log('show');
        }
    });


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
			loadcaptcha();
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

	alert('LOGIN - fazer submit ! >> '+token);
}

function recSenha(token) {
	var usuario 	 = $("#usuario").val();
	var revendedor = $("#revendedor").val();
	var senha			 = $("#senha").val();

	var payload = {
		usuario: usuario,
		revendedor: revendedor,
		senha: senha,
		token: token
	}

	alert('REC SENHA - fazer submit ! >> '+token);
}

function contato(token) {
	var usuario 	 = $("#usuario").val();
	var revendedor = $("#revendedor").val();
	var senha			 = $("#senha").val();

	var payload = {
		usuario: usuario,
		revendedor: revendedor,
		senha: senha,
		token: token
	}

	alert('CONTATO - fazer submit ! >> '+token);
}

function loadFaleConosco() {
	$.get('js/tpls/contato.html', function(template) {
		var rendered = Mustache.render(template);
		$('#boxmain').html(rendered);
		loadcaptcha();
	});
}

function loadEsqueceuSenha() {
	$.get('js/tpls/recsenha.html', function(template) {
		var rendered = Mustache.render(template);
		$('#boxmain').html(rendered);
		loadcaptcha();
	});
}


