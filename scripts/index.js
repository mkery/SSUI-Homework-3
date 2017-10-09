var currentPage = 0;
var timer = null;
// showDots();
// displayHighlightDots();
displayPage();

function displayPage() {
	var i;
	var slides = document.getElementsByClassName("highlightBar");
	var dots = document.getElementsByClassName("highlightDot");
	// alert(dots.length);
	for (i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
		if(i == currentPage){
			slides[i].style.display = "block";
		}
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].style.backgroundColor = "#fff";
	}
	if (dots.length != 0) {
		dots[currentPage].style.backgroundColor = "#95989A";
	}
	currentPage++;
	if (currentPage == slides.length){
		currentPage = 0;
	}
	timer = setTimeout(displayPage, 10000);
}

function showHighlight(n){
	clearTimeout(timer);
	currentPage = n;
	displayPage();
}

// function showDots(){
// 	var dots = document.getElementsByClassName("highlightDot");
// 	alert(dots.length);
// 	for (i = 0; i < dots.length; i++){
// 		dots[i].style.backgroundColor = "#fff";
// 	}
// 	dots[currentPage].style.backgroundColor = "#95989A";
// }