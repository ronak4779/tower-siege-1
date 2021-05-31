class Box{
        constructor(x,y,width,height){

                this.body = Bodies.rectangle(x,y,width,height);
                World.add(world,this.body);
                this.width = width;
                this.height = height;

}
}
