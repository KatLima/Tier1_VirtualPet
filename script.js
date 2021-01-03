//fix reseting with windows onload. 
window.onload = function() {

    document.getElementById("clean-button").addEventListener("click", clickedCleanButton);
    document.getElementById("feed-button").addEventListener("click", clickedFeedButton);
    document.getElementById("play-button").addEventListener("click", clickedPlayButton);
  
    const sprite_info = {
        name: "giratina", 
        happiness: 100,
        hunger: 100,
        cleaniness: 100,
        age: 0
    }
    UpdateSpriteInfo();
    //hunger bar function, will decrease every 10000ms
    /* work on decreasing bars per 10,000ms*/
    setInterval(function(){ 
        updateDay();
        clearBars();
        sprite_info['cleaniness'] -= 15;
        sprite_info['hunger'] -= 15;
        sprite_info['happiness'] -= 15;
        UpdateSpriteInfo();
        }, 10000);

    function clickedCleanButton(){
        sprite_info['cleaniness'] += 10;
        console.log(sprite_info['cleaniness']);
        UpdateSpriteInfo();
    }

    function clickedFeedButton (){
        sprite_info['hunger'] += 10;
        console.log(sprite_info['hunger']);
        UpdateSpriteInfo();
    }

    function clickedPlayButton(){
        sprite_info['happiness'] += 10;
        console.log(sprite_info['happiness']);
        UpdateSpriteInfo();
    }

    function updateDay(){
        sprite_info['age'] += 1;
        document.getElementById("day").innerHTML = sprite_info['age'] + " Day(s) Old";
    }
    function resetDay(){
        //function to reset the game back to day 1
    }
/* reformat to create updatesprite info into just clearRect and fill Rect
create a function that initializes the bars */
    function UpdateSpriteInfo(){

        //health display that grows by 50 with button click
        canvas_health = document.getElementById('health_display');
        health_bar = canvas_health.getContext('2d');
        health_bar.fillStyle='green';
        health_bar.fillRect(0,0,sprite_info['cleaniness'],5);

        //hunger display
        canvas_hunger = document.getElementById('hunger_display');
        hunger_bar = canvas_hunger.getContext('2d');
        hunger_bar.fillStyle='lightblue';
        hunger_bar.fillRect(0,0,sprite_info['hunger'],5);

        //happiness display 
        canvas_happiness = document.getElementById('happiness_display');
        happiness_bar = canvas_happiness.getContext('2d');
        happiness_bar.fillStyle='pink';
        happiness_bar.fillRect(0,0,sprite_info['happiness'],5);  
    }  

    function clearBars(){
        health_bar.clearRect(0,0,sprite_info['cleaniness'],5);
        hunger_bar.clearRect(0,0,sprite_info['hunger'],5);
        happiness_bar.clearRect(0,0,sprite_info['happiness'],5);
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