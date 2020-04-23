class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true

     }
     this.body = Bodies.rectangle(x,y,height,width,options);
     World.add(world,this.body)
     this.width = width;
     this.height = height;
    }
    
    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      var pos = this.body.position;
      var angle = this.body.angle;
      if(keyIsDown(LEFT_ARROW)) {
        angle = -PI/2;
      }

      if(keyIsDown(RIGHT_ARROW)) {
        angle = PI/2;;

      }
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("red")
      rectMode(CENTER);
      rect(0,0,this.height,this.width)
      //ellipse(0,0,this.radius,this.radius);
      pop();
      fill("orange");
      arc(100, height-50, 90, 100, PI, TWO_PI);
      rect(100, height-40, 100,20);
      rect(100, height-20, 100,20);

    };
}
