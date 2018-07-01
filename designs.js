// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function makeGrid (event) {
  $('table tr').remove() // Clear grid
  let height = $('#inputHeight').val();
  let width = $('#inputWeight').val();
 
// Your code goes here!
for(let i = 1; i <= height; i++){
  $('table').append("<tr></tr>");
// create row
for(let j = 1; j <= width; j++){
  $('tr:last').append("<td></td>");
 // create table cells (columns)
}
}

$("table tr td").on('click', function addcolor (){
  var color=$('#colorPicker').val();
  if ($(this).attr('style')) {
    $(this).removeAttr('style')  // remove color from the cell
} else {
    $(this).attr('style', 'background-color:' + color);   // add color to single cell 
}
});
event.preventDefault();
});
