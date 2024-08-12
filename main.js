//Jquery
$(document).ready(function() {
    $("header button").click(function() {
        $('#novaTarefa').slideDown();
    })
    
    $('#cancelar').click(function() {
        $('#novaTarefa').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();

        var novaTarefa = $('#campoTarefa').val();

        $('#listaDeAtividades').append('<li><span>'+novaTarefa+'</span></li>');

        $('#campoTarefa').val('');
    })
        
    $('#listaDeAtividades').on('click', 'li', function(e){
        if (!$(e.target).is('button')) {
            $(this).find('span').toggleClass('line-through');
        }
    });

});
//JS

