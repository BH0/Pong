class Room { 
  constructor(width, height, canvas, paddleOne, paddleTwo, ball) { 
      this.canvas = canvas; 
      this.ctx = this.canvas.getContext("2d"); 
      this.height = height; 
      this.width = width; 
      this.color = "red"; 
      // canvas.style.cssText = `width:${width};height:${height};background-color:$this.color}`; 
      //  this.canvas.style.backgroundColor = this.color; 
        this.canvas.style.border = `5px solid ${this.color}`; 
        this.canvas.width = this.width; // + 10 
        this.canvas.height = this.height; 
        
        this.ball = ball; 
        this.ball.x = this.width/2; 
        this.ball.y = this.height/2 + 15;  

        this.paddleOne = paddleOne; 
        this.paddleTwo = paddleTwo; 
        
        this.paddleOne.x = this.width - this.width + 10; 
        this.paddleOne.y = this.height/2; 
        this.paddleTwo.x = this.width - 20; 
        this.paddleTwo.y = this.height/2; 
    
        this.attatchWindowOrientationEventListener(); 
  } 
  
  attatchWindowOrientationEventListener(e) { 
        /// Check the device's orientation is accessible
        if (window.DeviceOrientationEvent) {  // && onMobile) {
            window.addEventListener("deviceorientation", event => {
                /// Get Device Orientation 
                this.paddleOne.getDeviceOrientation(event); 
            }); 
        } 
    } 
    
   update() { 
        this.ctx.clearRect(0, 0, this.width, this.height); 

        this.ball.move(); 
        this.paddleTwo.move(this.ball.y); 
    
        this.score(); 
        
        this.ballCollisionWithPaddle(); 

        this.paddleOne.draw(); 
        this.paddleTwo.draw(); 
        this.ball.draw(); 
    } 

    score() { 
          if (this.ball.x >= 290) { 
            this.paddleOne.score += 1; 
        } else if (this.ball.x <= 12) { 
            this.paddleTwo.score += 1; 
        } 
    } 
    
    ballCollisionWithPaddle() { // this likely is not correct (mathematically) 
        if (this.ball.y >= this.paddleTwo.y - this.paddleTwo.height && this.ball.y <= this.paddleTwo.height + this.paddleTwo.height && this.ball.x >= this.paddleTwo.x - 10) { 
            // alert("Collision");
            console.log("Coll " + this.ball.y + " " + this.paddleTwo.y); 
            this.ball.canMoveRight = false; 
        } 
        if (this.ball.y >= this.paddleOne.y +  this.paddleOne.height && this.ball.y <= this.paddleOne.height - this.paddleOne.height && this.ball.x >= this.paddleOne.x + 10) { 
            // alert("Collision");
            console.log("Coll " + this.ball.y + " " + this.paddleOne.y); 
            this.ball.canMoveRight = true; 
        } 
        
    } 
} 
