const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { pageX, pageY } = event;
  blob.animate({
    left: `${pageX}px`,
    top: `${pageY}px`
  }, { duration: 3000, fill: "forwards" });
}

var randomColor = Math.floor(Math.random()*16777215).toString(16);
var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
blob.style.backgroundColor = "#"+randomColor;
setInterval(
  function () {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    blob.style.background = "#"+randomColor;
  },3000);