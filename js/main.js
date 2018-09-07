


var CANVAS_WIDTH = 600;
var CANVAS_HEIGHT = 600;
var score= 0;
var time =30;
var highscore = cache();
// localStorage.setItem("highscore",0);
var timerDiv = document.getElementById('timer');

var highScoreDisplay= document.getElementById("highScoreDisplay");
var scoreDisplay= document.getElementById("scoreDisplay");
highScoreDisplay.innerHTML = highscore;
timerDiv.innerHTML = time;
timer();
moveObject('first');

////////////////////////for getting the click command from the user/////////////////////

var object1 = document.getElementById ('canvas').addEventListener('click', function() {
    play();
});

var object = document.getElementById('first').addEventListener('click', function() {
   
    if(this.getElementsByTagName( "img")[0].src.slice(-5)=="0.png"){
        
        alert("You killed the Wrong Bird");
        overgame();
    }

    score++;
    scoreDisplay.innerHTML = score;
    update();
    highScoreDisplay.innerHTML = highscore;

});

function play(){
    var audio = document.getElementById("audio2");
    audio.play();
  }

///////////////////////////// For high Score//////////////////////////
function cache(){
   
    if (localStorage['highscore']){
        return parseInt(localStorage['highscore']);
    }
    else{ return 0; }
}
function write (){
    localStorage['highscore']=highscore;
}
function update(){
    if (score>highscore){
        highscore =score;
        
        write();
        return true;
    }
    return false;
}
/////////////////////////// High score end//////////////////////////
function randomX() {
    return Math.floor(Math.random() * 540)+10;
};

    function randomName(){

        return Math.floor(Math.random() * 5)

    }
    function randomY() {
        return Math.floor(Math.random()*480)+40;
    };

var e;
function moveObject(id){
  
    e = setInterval(frame, 1000);
    function frame(){
        document.getElementById(id).style.top = randomY() +'px';
        document.getElementById(id).style.left = randomX() + 'px';
        document.getElementById(id).getElementsByTagName( "img")[0].src='Images/'+Math.floor(Math.random() * 5)+".png";
        console.log(document.getElementById(id).getElementsByTagName( "img")[0].src.slice(-5));

        
    }
}


function timer(){
     var time =30;
    var int=setInterval(a,1000);
    function a(){

        if (time!=0){
            time--;
            timerDiv.innerHTML = time;
        }
        else {
            clearInterval(int);
            clearInterval(e);
            overgame();
        }
    };
}
function overgame(){

window.location.href="gameover.html";
}
// setInterval(function(){
//     var red = Math.round(Math.random() * 255);		// Red color 
//     var green = Math.round(Math.random() * 255);	// Green color
//     var blue = Math.round(Math.random() * 255);		// Blue color
//     var bg = "background: rgb(" + red + ", " + green + ", " + blue + ");";
// 		var cb = "background: rgb(" + blue + ", " + red + ", " + green + ");";
// 		var col = "color: rgb(" + red + ", " + green + ", " + blue + ");";
//         var element = document.getElementById("canvas");
//         element.style = bg;
// 		// element1.innerText = "Mitraw : "+ bg;
// 		// element1.style = col + cb;
//     }, 1000);
    
//     var box = document.getElementById('canvas'),
//         box_one = document.getElementById('first'),
//         imgs = ['img1.jpg', 'img2.png'];

//     box.addEventListener('click', function() {
//         console.log(imgs);
//         img = imgs.shift();

//         imgs.push(img);

//         box.style.backgroundImage = "url('"+img+"')";
//     });