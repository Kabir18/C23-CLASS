//creating a class
class Box {
  //giving coordinates to the ball
  constructor(x, y, width, height) {
    //properties of physics engine
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }

    //declaring the body as rectangle
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    //adding body to the world
    World.add(world, this.body);
  }
  display(){
    //displaying the position of the body
    var pos =this.body.position;
    var angle = this.body.angle
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    //physics engine is updating the rectangle
    rect(0, 0, this.width, this.height);
    pop();
  }
};
