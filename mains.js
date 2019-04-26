var height=100;
var color = 'black';

$('.rectangle').css({'width' : '100px',
                    'height' : '100px',
                    'background-color' : color,
                    'margin-left' : '40%',
                    'margin-top' : '50px'});
$('#up').click(function(){
    height+=50;
    if (height > 500 ){
        height=100;
    }
    $('.rectangle').css('height', height+'px')
});
$('#vert').click(function(){
    $('.rectangle').css('background-color', 'green')
});
$('#default').click(function(){
    $('.rectangle').css('background-color', color)
});
$('#display').click(function(){
    $('.rectangle').css('display', 'none')
});
$('#displayb').click(function(){
    $('.rectangle').css('display', 'block')
});
