class Ground{
     //properties
       constructor(x,y,w,h)
       let options = {

          isStatic:false
        }
       

      this.body = Bodies.rectangle(x,y,w,h,options)
      this.w = w;
      this.h = h;
      World.add(world, this.body);

      



     //function
     show (){
          var pos = this.body.position;
          push ();
          rectangle(pos.x,pos.y,this.w,this.h);
          pop ();



     
    
     }




}