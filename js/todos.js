// check and uncheck ToDos
$('ul').on('click', 'li', function(){
	$(this).toggleClass('completed');
})
// delete Todos
$('ul').on('click', 'span', function(event){
	$(this).parent().slideUp(200, function(){
		$(this).remove();
	});
	event.stopPropagation();	
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing new todo
		var newTodo = $(this).val();
		// clear input
		$(this).val('')
		// add new to the list
		$('ul').append("<li><span>x</span>" + newTodo + "</li>")
	}
})