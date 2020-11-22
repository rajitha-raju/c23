class Box{
    constructor(x,y,width,height){
        var boxoptions={
            restitution: 0.8,
        }
        this.body=Bodies.rectangle(x,y,width,height,boxoptions);
        this.width=width;
        this.height=height
        World.add(world,this.body)
    }

display(){
    var pos=this.body.position;
   
    fill(255);
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height);
   
}

}