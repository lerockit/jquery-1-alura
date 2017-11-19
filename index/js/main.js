var text = $('#text').text(),
		field = $('#field'),
		seconds = $('#seconds'),
		words = $('#words'),
		charac = $('#charac');

field.on('input', function(){
	var fieldText = field.val(),
			numWords = fieldText.split(/\S+/).length;

	words.text(numWords - 1);

	charac.text(fieldText.length);

});

field.one('focus', function(){
	
	$('.seconds').addClass('start');

	var cronometer = setInterval(function(){
		
		var secDeg = seconds.text();
		secDeg--;

		seconds.text(secDeg);

		if(secDeg == 0){
			field.attr('disabled', true);
			clearInterval(cronometer);
		};

	} ,1000);
});