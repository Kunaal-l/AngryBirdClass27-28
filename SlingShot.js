class SlingShot{
    constructor(a,b){
    var options = {
        bodyA:a,
        pointB:b,
        stiffness:0.6,
        length:10.5
    }

    
    this.slingShot = Constraint.create(options);
    World.add(world,this.slingShot);
}

display(){
    if(this.slingShot.bodyA){
var pointA = this.slingShot.bodyA.position;
var pointB = this.slingShot.pointB;

line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}

fly(){

 this.slingShot.bodyA = null;

}


}