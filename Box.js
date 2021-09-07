// Registering Component in log-component.js
AFRAME.registerComponent("move-box" /*component name*/,{
    schema:{
     //data   (is an object that defines the property name, its types and default values)
    moveX:{type:'number',default:1}
    },
  /*  init: function(){
        //do something when component first attached
        console.log(this.data.message)
    },
  update:function(){
        //do something when component's data is updated
    },
    
    remove:function(){
        // do something when the component or its entity is detached
    },*/
    tick:function(){
        //do something on every scene tick of fram
        this.data.moveX= this.data.moveX + 0.01
        
        var pos=this.el.getAttribute("position");
        pos.x=this.data.moveX;
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
})