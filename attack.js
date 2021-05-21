class attacker{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB
        this.o = Constraint.create(options);
        World.add(world, this.o);
    }
    atttach(point){
        this.o.bodyA = point;
    }
    
    flyy(){
        this.o.bodyA = null;
    }

    display(){
        
        if(this.o.bodyA){
            var pointA = this.o.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                
            }
           
            
            pop();
        }
    }
    
}

