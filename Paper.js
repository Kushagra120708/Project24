class Paper{
 constructor(x,y,radius) {
     var options = {
        isStatic : false,
		restitution : 0.3,
		friction : 0.5,
		density : 1.2
     }
    this.body = Bodies.circle(100,640,radius,options);
    this.body.radius = radius;
    this.image = loadImage("paper.png");
    World.add(world,this.body) 
 };
  display() {
     var angle = this.body.angle; 
    fill("purple")
    rotate(angle)
    ellipseMode(RADIUS)
    ellipse(this.body.position.x, this.body.position.y, this.body.radius, this.body.radius);  
 };
}