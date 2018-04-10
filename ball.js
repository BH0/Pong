
class Ball { 
    constructor(ctx, color) { 
        this.ctx = ctx; 
        this.color = color; 
        this.x = 0; this.y = 0; 
        // may allow for customizable radious too 
        this.canMoveUp = false || true; this.canMoveRight = false || true;
        this.radius = 10;
        this.sAngle = 0;
        this.eAngle = 2 * Math.PI;

        this.x = this.y = this.width = this.height = 10; 
    } 
    
    draw() { 
        this.ctx.beginPath();
        // this.ctx.arc(this.x, this.y, this.radius, this.sAngle, this.eAngle);
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fill();
        this.ctx.closePath(); 
    } 
    
    move() { 
      this.moveY(); 
      this.moveX(); 
    } 
    
    moveY() { 
        if (this.y >= 480) { 
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
        if (this.x >= 640 || this.x <= 2) { 
            this.canMoveRight = (true) ? false : true; 
        } 

        if (this.canMoveRight) {
          this.x -= 10; 
        } else if (!this.canMoveRight) { 
            this.x += 10; 
        } 
    } 
} 
