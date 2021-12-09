color1 = document.querySelector(".color1");
color2 = document.querySelector(".color2");
body = document.querySelector("#body");
function setBackgroundColor () {

	body.style.background =  `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	document.getElementsByTagName("h3")[0].textContent = body.style.background;
	console.log("body style " + body.style.background);
}

function changeBackground(){
  document.body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

color1.addEventListener("input",setBackgroundColor);
color2.addEventListener("input",setBackgroundColor);