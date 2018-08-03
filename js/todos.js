// check and uncheck ToDos
$('ul').on('click', 'p', function(){
	$(this).toggleClass('completed');
})

// delete Todos
$('ul').on('click', 'span', function(event){
	$(this).parent().slideUp(200, function(){
		$(this).remove();
	});
	event.stopPropagation();	
})

// add new todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing new todo
		var newTodo = $(this).val();
		// clear input
		$(this).val('')
		// add new to the list
		$('ul').append("<li><span><i class='fas fa-times-circle'></i></span><p>" + newTodo + "</p></li>")
	}
})

// toogle input
$('#addBtn').click(function(){
	$(this).toggleClass('add');
	$("input[type='text']").fadeToggle(150, 'linear');
})