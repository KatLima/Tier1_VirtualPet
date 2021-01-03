window.onload = function() {

    document.getElementById("clean-button").addEventListener("click", clickedCleanButton);
    document.getElementById("feed-button").addEventListener("click", clickedFeedButton);
    document.getElementById("play-button").addEventListener("click", clickedPlayButton);
  
    let sprite_info = {
        name: "giratina", 
        happiness: 800,
        hunger: 800,
        cleaniness: 0,
        age: 0
    }

    //hunger bar function, will decrease every 10000ms
    /* work on decreasing bars per 10,000ms*/
    setInterval(function(){ 
        UpdateSpriteInfo();
        sprite_info['cleaniness'] += 50;
        sprite_info['hunger'] -= 50;
        //sprite_info['happiness'] -= 50;
        console.log(sprite_info['cleaniness']);
        }, 10000);

    function clickedCleanButton(){
        sprite_info['cleaniness'] += 50;
        console.log(sprite_info['cleaniness']);
        UpdateSpriteInfo();
    }

    function clickedFeedButton (){
        sprite_info['hunger'] += 50;
        console.log(sprite_info['hunger']);
        UpdateSpriteInfo();
    }

    function clickedPlayButton(){
        sprite_info['happiness'] += 50;
        console.log(sprite_info['happiness']);
        UpdateSpriteInfo();
    }

    function UpdateSpriteInfo(){

        //health display that grows by 50 with button click
        canvas_health = document.getElementById('health_display');
        health_bar = canvas_health.getContext('2d');
        health_bar.fillStyle='green';
        health_bar.fillRect(0,0,sprite_info['cleaniness'],50);

        //hunger display
        canvas_hunger = document.getElementById('hunger_display');
        hunger_bar = canvas_hunger.getContext('2d');
        hunger_bar.fillStyle='lightblue';
        hunger_bar.fillRect(0,0,sprite_info['hunger'],50);

        //happiness display 
        canvas_happiness = document.getElementById('happiness_display');
        happiness_bar = canvas_happiness.getContext('2d');
        happiness_bar.fillStyle='pink';
        happiness_bar.fillRect(0,0,sprite_info['happiness'],50);  


    }  

};
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