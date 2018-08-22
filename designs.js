    // Select color input
    // Select size input
    var tableHeight , tableWidth , chosenColour;
    // When size is submitted by the user, call makeGrid()
    $('#sizePicker').submit(function (event) {
        event.preventDefault();
        tableHeight = $('#inputHeight').val();
        tableWidth = $('#inputWidth').val();
        makeGrid(tableHeight, tableWidth);
    })

    function makeGrid(row,col) {
        $('tr').remove();
       for(var i=1; i<=row; i++) {
               $('#pixelCanvas').append('<tr id=row'+i+'></tr>');
               for(var j=1; j<=col; j++){
                       $('#row' + i).append('<td></td>');
                   }
           }
       blockColor();

    }
    function blockColor(){
            $('td').click(function colourPicker(){
            chosenColour = $('#colorPicker').val();
            $(this).attr('style','background-color:' + chosenColour);
        })
    }