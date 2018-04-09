
// function init() { 
    let canvas = document.getElementById("canvas"); 
    let ball = new Ball(canvas.getContext("2d"), "green");
    let playerPaddle = new Paddle(canvas.getContext("2d"), "green"); 
    let opponentPaddle = new Paddle(canvas.getContext("2d"), "blue"); 
    let room = new Room(300, 190, canvas, playerPaddle, opponentPaddle, ball); 
    
// } 

// init(); 

function update() { 
    room.update(); 
} 

setInterval(update, 30);  


