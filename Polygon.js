class Polygon{
    constructor(x, y, radius, options){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius);

        imageMode(CENTER)
        this.polygonImage=loadImage("sprites/polygon.png");

        World.add(world, this.body);
    }

    display(){
        image(this.polygonImage, this.body.position.x, this.body.position.y);
    }
}