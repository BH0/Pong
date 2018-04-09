
class Ball { 
    constructor(ctx, color) { 
        this.ctx = ctx; 
        this.color = color; 
        this.x = 0; this.y = 0; 
        // may allow for customizable radious too 
        this.canMoveUp = false; this.canMoveRight = false; 
    } 
    
    draw() { 
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 10, 0, 2*Math.PI);
        this.ctx.fill(); 
        this.ctx.closePath(); 
    } 
    
    move() { 
      this.moveY(); 
      this.moveX(); 
    } 
    
    moveY() { 
        if (this.y >= 180) { 
            this.canMoveUp = true; 
        } else if (this.y <= 12) { 
            this.canMoveUp = false; 
        } 
        
        if (this.canMoveUp) { 
          this.y -= 12;   
        } else if (!this.canMoveUp) { 
            this.y += 12; 
        }
    } 
    
    moveX() { 
        if (this.x >= 290) { 
            this.canMoveRight = true; 
        } else if (this.x <= 12) { 
            this.canMoveRight = false; 
        } 
        
        if (this.canMoveRight) { 
          this.x -= 10; 
        } else if (!this.canMoveRight) { 
            this.x += 10; 
        } 
    } 
} 
