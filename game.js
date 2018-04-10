
// function init() { 
    let canvas = document.getElementById("canvas"); 
    let ball = new Ball(canvas.getContext("2d"), "green"); 
    let playerPaddle = new Paddle(canvas.getContext("2d"), "green"); 
    let opponentPaddle = new Paddle(canvas.getContext("2d"), "blue");
    
    let room = new Room(640, 480, canvas, playerPaddle, opponentPaddle, ball);
    
// } 

// init(); 

    document.addEventListener("keydown", e => {
        if (e.keyCode == 32) { 
            alert("Game paused");
        } 
    }); 

function update() { 
    room.update(); 
} 

setInterval(update, 30);  


