function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
  




var player_order = [];
// button event listeners
function btninitialise(){
$('.btn').on('mousedown',
    (e)=>{
        var color = e.target.getAttribute('id')
        console.log(e.target.getAttribute('id'));
        
        $('#'+color).toggleClass('pressed');
        player_order.push(e.target.getAttribute('id'));
        console.log(player_order)
    }
);

$('.btn').on('mouseup', function (e) {
    $('#'+e.target.getAttribute('id')).toggleClass('pressed');
    $('#level-title').text('chasdf 1');
});
}
function btnoff(){
    $('.btn').off('mousedown');
    $('.btn').off('mouseup');
};

/*
overview:
- figure out how to call random numbers
- figure out how to remember how to store inputs (order of keys pressed)
- 
*/
function re_start(){
$('body').on('keydown',
    function(){
    $('#level-title').text('level 1');
    btninitialise();
    $('body').off('keydown');
    }
);
}
