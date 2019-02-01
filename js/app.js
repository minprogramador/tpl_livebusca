
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
			var rendered = Mustache.render(template);
			$('#boxleft').html(rendered);
		});

		$.get('js/tpls/login.html', function(template) {
			var rendered = Mustache.render(template);
			$('#boxmain').html(rendered);
		});

	  // $.get('js/tpls/topo.html', function(template) {
	  //   var rendered = Mustache.render(template, {name: "Luke"});
	  //   $('#topo').html(rendered);
	  // });

	  // $.get('js/tpls/row-cards.html', function(template) {
	  //   var rendered = Mustache.render(template, {name: "Luke"});
	  //   $('#cards1').html(rendered);
	  // });

	  // $.get('js/tpls/row-cards2.html', function(template) {
	  //   var rendered = Mustache.render(template, {name: "Luke"});
	  //   $('#cards2').html(rendered);
	  // });

	  // $.get('js/tpls/row-cards3.html', function(template) {
	  //   var rendered = Mustache.render(template, {name: "Luke"});
	  //   $('#cards3').html(rendered);
	  // });

	  // $.get('js/tpls/rodape.html', function(template) {
	  //   var rendered = Mustache.render(template, {name: "Luke"});
	  //   $('#rodape').html(rendered);
	  // });



  });
}