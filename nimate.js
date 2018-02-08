var ID = 0;
var grow = true;
var circSize = 20;

var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var clear = function(){
  ctx.clearRect(0,0,600, 600); //Make a rectangle spanning our entire canvas to be cleared
}

var drawCirc = function(x, y){
  if(circSize >= 0){
    clear();

    ctx.beginPath();
    ctx.arc(300, 300, circSize, 0, 2 * Math.PI); //Draw an arc at the center of the circle, starting at 0 and spanning 2pi radians: a full circle
    ctx.fill(); // Fill in the arc to draw our circle
    ctx.stroke();

    if(grow){
      circSize++;
    }
    else{
      circSize--;
    }

    ID = window.requestAnimationFrame(drawCirc);
  }
  else{
    circSize = 0;
  }
}

var bgn = document.getElementById("begin");
bgn.addEventListener("click", drawCirc);

var stopAnim = function(){
  if(ID){
    window.cancelAnimationFrame(ID);
  }
}

var stp = document.getElementById("stop");
stp.addEventListener("click", stopAnim);

var changeMode = function(){
  grow = !grow;
}

var chng = document.getElementById("mode");
chng.addEventListener("click", changeMode);
