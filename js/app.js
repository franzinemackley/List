var $remove = '<span class="delete"></span>'

$(document).ready(function () {

    $('.adding').click(function (e) {
        e.preventDefault()
        var add = $('#add-item').val();
        $('.list').append('<li>' + $remove + add + '</li>');
    });

    $('#add-item').keydown(function (e){
    if(event.keyCode == 13) {
        event.preventDefault();
        $('.adding').click();
        };
    });

    $( '.reset' ).click(function() {
      $( '.list' ).empty();
    });
    
    $(document).on('click', 'li', function() {
        $(this).toggleClass('stroked');
    });

    $(document).on('click', '.delete', function(){ $(this).closest('li').fadeOut(200);
});


});

$(document).ready(function() {
    $('ol').sortable();
});



