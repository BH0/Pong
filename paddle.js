

class Paddle { 
    constructor(ctx, color) { 
        this.ctx = ctx;  
        this.x = 0; 
        this.y = 0; 
        this.color = color; 
        this.isPlayable = false; 
        this.speed = 7; 
        this.score = 0; 
        this.width = 10; 
        this.height = 50; 
    } 
    
    getDeviceOrientation(event) { 
        this.isPlayable = true; 
        this.y = Math.round(event.beta); 
        this.x = Math.round(event.gamma); 
    } 
    
    draw() { 
        this.ctx.beginPath(); 
        this.ctx.fillStyle= this.color; 
        this.ctx.rect(this.x, this.y, this.width, this.height); 
        this.ctx.fill(); 
        this.ctx.closePath();        
        this.drawScore(); 
    } 
    
    drawScore() { 
        this.ctx.font = "18px Arial";
        if (!this.isPlayable) { // AI Paddle 
            this.ctx.fillText(`Score: ${this.score}`, this.x - 90, this.y); 
        } else { 
            this.ctx.fillText(`Score: ${this.score}`, this.x + 10, this.y);  
        } 
    } 
    
    move(ballYPos) { 
        if (ballYPos > this.y) { 
            this.y += this.speed;  
        } else { 
          this.y -= this.speed;   
        } 
    } 
} 