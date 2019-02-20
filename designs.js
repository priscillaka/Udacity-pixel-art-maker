

$('#sizePicker').submit(function(e) {
//Prevents page to reload
    e.preventDefault();

//Set the grid dimensions
    var height = $('#inputHeight').val()
    var width = $('#inputWidth').val()

//Calls the makeGrid() function
    makeGrid(height, width)
});

//Builds the grid
function makeGrid(height, width) {
    $('#pixelCanvas').empty();  //Clears the grid and starts over

//Loop to insert the rows
    for(var i = 0; i < height; i++) {
        $('#pixelCanvas').append('<tr class="row"></tr>');
    }
//Loop to insert the columns
    for(var i = 0; i < width; i++) {
        $('.row').append('<td></td>');
    }
    
    
// here is where the colorPicker is used to color each cell
    $('td').click(function addColor() {
        if($(this).attr("style")) {
            $(this).removeAttr("style");
        } else {
            $(this).css("background-color", $('#colorPicker').val());
        }

    });
}
