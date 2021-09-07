// Registering Component in log-component.js
AFRAME.registerComponent("log" /*component name*/,{
    schema:{
     //data   (is an object that defines the property name, its types and default values)
    message:{type:'string',default:"Hi Prangan ! "}
    },
    init: function(){
        //do something when component first attached
        console.log(this.data.message)
    },
   /* update:function(){
        //do something when component's data is updated
    },
    
    remove:function(){
        // do something when the component or its entity is detached
    },
    tick:function(){
        //do something on every scene tick of fram
    }*/
})