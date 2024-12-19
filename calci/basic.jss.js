 const display=document.getElementById("todisplay");
 function append(input){
   display.value+=input;
 }
 function clear1(){
    display.value=null;
 }
 function calculate(){
  display.value=eval(display.value);
 }
 console.log("dhanush");