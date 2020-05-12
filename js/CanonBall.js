class CanonBall 
{
  constructor(x, y, width, height) 
  {
    var options = 
    {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      this.image = loadImage("assets/canonBall.png");

      World.add(world, this.body);
  };

  display()
  {
   var pos = this.body.position;
   push();
   imageMode(CENTER);
   image(this.image, pos.x, pos.y, this.width, this.height);
   pop();
  };
};
