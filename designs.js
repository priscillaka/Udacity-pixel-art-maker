var height = 0;
var width = 0;

$('#sizePicker').submit(function(e) {
    e.preventDefault();
    height = $('#inputHeight').val()
    width = $('#inputWidth').val()

    makeGrid(height, width)
});



function makeGrid(height, width) {
    $('#pixelCanvas').empty();

    for(var i = 0; i <= height; i++) {
        $('#pixelCanvas').append('<tr class="row"></tr>');
    }

    for(var i = 0; i <= width; i++) {
        $('.row').append('<td></td>');
    }


    $('td').click(function addColor() {
        if($(this).attr("style")) {
            $(this).removeAttr("style");
        } else {
            $(this).css("background-color", $('#colorPicker').val());
        }

    });
}
