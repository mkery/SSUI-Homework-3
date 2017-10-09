var cartNum = 0;

function addToCart(){
	var i;
	var flag = false;
	var slides = document.getElementsByClassName("sizeDot");
	for (i = 0; i < slides.length; i++) {
		if (slides[i].style.backgroundColor == "rgb(0, 0, 0)"){
			flag = true;
		}
	}
	if (flag){
		var inc = parseInt(document.getElementById("quantityNum").textContent, 10) || 0;
		cartNum += inc;
		document.getElementById("cartNumber").innerHTML = cartNum;
	} else {
		alert("Please choose a size first!");
	}
}

function decQuantity(){
	var currentQuantity = parseInt(document.getElementById("quantityNum").textContent, 10) || 0;
	if (currentQuantity > 1){
		currentQuantity -= 1;
	}
	document.getElementById("quantityNum").innerHTML = currentQuantity;
}

function incQuantity(){
	var currentQuantity = parseInt(document.getElementById("quantityNum").textContent, 10) || 0;
	currentQuantity += 1;
	document.getElementById("quantityNum").innerHTML = currentQuantity;
}

function checkSize(n) {
	var i;
	var slides = document.getElementsByClassName("sizeDot");
	for (i = 0; i < slides.length; i++) {
      slides[i].style.backgroundColor = "#fff";  
  	}
  	slides[n].style.backgroundColor = "#000";
}

function checkImgDot(n){
	var i;
	var slides = document.getElementsByClassName("mainproductImg");
	for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  	}
  	slides[n].style.display = "block";
}

// function checkColor(n) {
// 	var i;
// 	var slides = document.getElementsByClassName("colorDot");
// 	for (i = 0; i < slides.length; i++) {
//       slides[i].style.borderColor = "#95989A";  
//   	}
//   	slides[n].style.borderColor = "#ED1245";
// }