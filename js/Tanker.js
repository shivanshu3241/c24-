class Tanker 
{
  constructor(x, y, width, height) 
  {
      var options = 
      {
        isStatic: true
      }
     this.body= Bodies.rectangle(x, y, width, height);
     this.width = width;
     this.height = height;
     this.image = loadImage("assets/tanker.PNG");

     World.add(world, this.body);
    };

    display()
    {
     var pos = this.body.position;
     push();
     fill("red");
     imageMode(CENTER);
     image(this.image, pos.x, pos.y, this.width, this.height);
     pop();
    };
}
