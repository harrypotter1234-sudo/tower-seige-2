class poly{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,20,20, options);
        
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER)
        
        image(this.image,0,0,30,30);
        pop();
      }
}



















