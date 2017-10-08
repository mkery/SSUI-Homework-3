function showDogHarness(n) {
	var i;
	var slides = document.getElementsByClassName("dogHarnessColors");
	for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  	}
  	slides[n].style.display = "block";
}