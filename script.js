//clean button function, on click will raise cleaniness by 5 points
function Feed() {
    document.getElementById("feed_text").innerHTML = "You fed Giratina!";
}

function Clean() {
    document.getElementById("clean_text").innerHTML = "Giratina feels clean!";
}
function Play() {
    document.getElementById("play_text").innerHTML = "Giratina is happy!";
}

//health, hunger, happinessbar function, will decrease every 10000ms
window.onload=function(){
    canvas_health = document.getElementById('health_display');
    health_bar = canvas_health.getContext('2d');
    health_bar.fillStyle='green';
    health_bar.fillRect(0,0,700,50);

    //hunger bar function, will decrease every 10000ms
    canvas_hunger = document.getElementById('hunger_display');
    hunger_bar = canvas_hunger.getContext('2d');
    hunger_bar.fillStyle='lightblue';
    hunger_bar.fillRect(0,0,550,50);

    canvas_hunger = document.getElementById('happiness_display');
    hunger_bar = canvas_hunger.getContext('2d');
    hunger_bar.fillStyle='pink';
    hunger_bar.fillRect(0,0,850,50);    
}



/*
var display = document.getElementById('happiness_display').getContext('2d');

drawHealthbar(display,10,10,500,50,75,100);


function drawHealthbar(canvas,x,y,width,height,health,max_health){

    if (health >= max_health){health = max_health;}
    if (health <= 0) {health = 0;}

    canvas.fillStyle = '#000000';
    canvas.fillRect(x,y,width,height);

    var colorNumber = Math.round((1-(health/max_health))*0xff)*0x10000+Math.round((health/max_health)*0xff)*0x100;
    var colorString = colorNumber.toString(16);

    if (colorNumber >= 0x100000){
        canvas.fillStyle = '#'+colorString;
    }else if (colorNumber << 0x100000 && colorNumber >= 0x10000) {
        canvas.fillStyle = '#0'+colorString; 
    }else if (colorNumber << 0x10000) {
        canvas.fillStyle = '#00'+colorString; 
    }
    canvas.fillRect(x+1,y+1, (health/max_health)*(width-2),height-2);
}
*/