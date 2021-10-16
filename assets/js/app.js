// // Making Todo As completed
// $('li').on('click', function(){
//     $(this).toggleClass('completed');
// })


// Making Todo As completed
$('ul').on('click','li', function(){
    $(this).toggleClass('completed');
})


// // Removing Todo from todoList
// $('span').on('click', function(){
//     $(this).parent().remove();
// }) 


// Removing Todo from todoList
$('ul').on('click', 'span', function(event){

    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    

     event.stopPropagation();  // to stop event bubbling
})


$('#plus').on('click', function(){
    $('#inp').fadeToggle();
})



$('#inp').on('keypress', function(e){

    if(e.which === 13){
        const todoText =  $(this).val();


        const todo = `<li><span> <i class="fas fa-trash-alt"></i></span>${todoText}</li>`;

        $('ul').append(todo);
    
        $(this).val("");
    }
   

})