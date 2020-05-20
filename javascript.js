var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8,9,10];
console.log("answer:", _.without(array, 6));



var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".random");

//body.style.background = "red";

function addGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}
color1.addEventListener("input", addGradient)


color2.addEventListener("input", addGradient)

function myRandom(){
	let randomColor = Math.floor(Math.random()*16777215).toString(16);
	 body.style.background = "#" + randomColor;

}

button.addEventListener("click", myRandom)


/*const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

genNew.addEventListener("click", setBg);
setBg();*/





/*{
    "build": "browserify javascript.js > bundle.js && live-server"
  },*/
