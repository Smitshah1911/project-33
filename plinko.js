class Plinko{
    constructor(x,y){
    var options={
        isStatic:true
    }
    this.body = Bodies.circle(x,y,14,options);
    this.x= x;
    this.y = y;

    World.add(world,this.body);
    }
    display(){
      ellipseMode(CENTER);
      fill("red");
      ellipse(this.x,this.y,14);

      if(this.Visiblity<0 && this.Visiblity>-1005){
        score++; //score = score  +1
    }
}
}