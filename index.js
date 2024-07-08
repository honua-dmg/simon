function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }


async function showcase(color){
    await sleep(500);
    $('#'+color).toggleClass('pressed');
    console.log(color);
    let coloraudio = new Audio(`./sounds/${color}.mp3`);
    coloraudio.play();
    setTimeout(() => { $('#'+color).toggleClass('pressed');  }, 100);
    
}

function btnoff(){
    $('.btn').off('mousedown');
    $('.btn').off('mouseup');
}

function end(){
    $('body').css('background-color', 'red');
    let end_beep = new Audio('./sounds/wrong.mp3');
    end_beep.play();
    setTimeout(() => { $('body').css('background-color', '#011F3F');  }, 300);
    btnoff();
    $('#level-title').text('Gameover, press any key to restart');

    player_order =[];
    game_order = [];
    counter =0;
    level = 1;
    re_start();
}


function btnclick(){
    $('.btn').on('mousedown',
        function (e) {
            var color = e.target.getAttribute('id')
            console.log(color);
            let coloraudio = new Audio(`./sounds/${color}.mp3`);
            coloraudio.play();
            $('#'+color).toggleClass('pressed');

            
    });

    $('.btn').on('mouseup', 
        function (e) {
            var color = e.target.getAttribute('id');
            console.log(`pressed color:${color}`);
            $('#'+color).toggleClass('pressed');


            if (game_order[counter]==color){
                counter++;
                player_order.push(color);
                                                    console.log(player_order);
            if (counter>game_order.length-1){
                console.log('levelup!')
                level++;
                $('#level-title').text(`level ${level}`);
                game_order.push(colors[getRandomInt(0,4)]);
                showcase(game_order[game_order.length-1]);
                player_order=[];
                counter=0;
            }
            
            }else{
                end();
            }

    });
}

function re_start(){
    $('body').on('keydown',
        function(){
            $('#level-title').text(`level ${level}`);
            game_order.push(colors[getRandomInt(0,4)]);
            showcase(game_order[game_order.length-1]);
            btnclick();
            $('body').off('keydown');

        }
    );
}

var game_order = []; //list of colors not numbers
var player_order= [];
var colors = ['blue','green','red','yellow'];
var counter = 0;
var level = 1;

re_start();