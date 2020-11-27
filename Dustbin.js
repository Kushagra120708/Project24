class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
    this.bottomBody = Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.bottomBody)
    this.rightBody = Bodies.rectangle((x+(width/2)), (y-(height*2)), (width-140), (height+70),options)
    World.add(world,this.rightBody)
    this.leftBody = Bodies.rectangle((x-(width/2)), (y-(height/2)), (width-140), (height+70),options)
    World.add(world,this.leftBody)

    this.bottomBody.width = width;
    this.bottomBody.height = height;
  }

  display() {
      fill("white")
      rect(this.bottomBody.position.x, this.bottomBody.position.y, this.bottomBody.width, this.bottomBody.height)
      rect((this.bottomBody.position.x + (this.bottomBody.width/2)), (this.bottomBody.position.y - (this.bottomBody.height*2) - 15), (this.bottomBody.width - 140), (this.bottomBody.height + 70));
      rect((this.bottomBody.position.x - (this.bottomBody.width/2)), (this.bottomBody.position.y - (this.bottomBody.height/2) - 30), (this.bottomBody.width - 140), (this.bottomBody.height + 70));
  }
}