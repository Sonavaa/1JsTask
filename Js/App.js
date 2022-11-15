//#region Math
// var x=4;
// var y= Math.PI;
// var s = y*x*x;
// console.log(s)
//#endregion


//#region Dark_Light_Mode
  var css = document.body.style;
  function Mode(){
    css.transition = "1s";
    

    if(css.backgroundColor == "black" &&
       css.color == "white" &&
       document.getElementById("button").innerHTML == "Light mode" ) {

        css.backgroundColor = "white";
        css.color = "black"; 
        document.getElementById("button").innerHTML = "Dark mode";
    } 
    else {

        css.backgroundColor = "black";
        css.color = "white";
        document.getElementById("button").innerHTML = "Light mode";
    }
   
  }
//#endregion


//#region Date_Time_Alert
const date = new Date();
var d = date.getDay();
var m = date.getMonth();    
var y = date.getFullYear();
var h = date.getHours();
var mi = date.getMinutes();
var message = "Welcome";
alert(`${d}.${m}.${y}  ${h}:${mi} ${"  "} ${message}`);

console.log(h);

if(date.getHours() > "12") {
        css.backgroundColor = "black";
        css.color = "white";
        document.getElementById("button").innerHTML = "Light mode";
} 
else {
        css.backgroundColor = "white";
        css.color = "black"; 
        document.getElementById("button").innerHTML = "Dark mode";
}
//#endregion