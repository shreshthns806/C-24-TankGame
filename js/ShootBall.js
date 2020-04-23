class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain); 
    }

    shoot(){
        this.chain.bodyA = null;
    }

    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB.position;
        push();
        strokeWeight(3);

        pop();
        
    }

}
}