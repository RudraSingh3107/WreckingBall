class Rope{

    constructor(bodyA, pointB){

        var option = {
 
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1.7,
            length : 350
            
        }
        this.pointB = pointB;
        this.rope = Constraint.create(option);
        World.add(world,this.rope);

    }

    display(){

        //var pos = this.body.position;
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        fill(1);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    
    }
}