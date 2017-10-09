var filterTags = [];
var sizes = ["Tiny", "Small", "Medium", "Large"];
var colors = ["Strawberry", "Blackberry", "Crazyberry", "Camouflage", "Night Moon", "Fire Orange"];
var productDict = {
"dogHarness":["Dog", "Harness", "Tiny", "Small", "Medium", "Large", 
"Strawberry", "Blackberry", "Crazyberry", "Camouflage", "Night Moon", "Fire Orange"], 
"catHarness":["Cat", "Harness", "Tiny", "Small", "Medium", "Large", 
"Strawberry", "Blackberry", "Crazyberry", "Camouflage", "Night Moon", "Fire Orange"], 
"harnessAttach":["Dog", "Cat", "Accessories", "Tiny", "Small", "Medium", "Large", 
"Strawberry", "Blackberry", "Crazyberry", "Camouflage", "Night Moon", "Fire Orange"], 
"petGPS":["Dog", "Cat", "Accessories", "Tiny", "Small", "Medium", "Large", 
"Strawberry", "Blackberry", "Crazyberry", "Camouflage", "Night Moon", "Fire Orange"]};

function showColors(n, x) {
	var i;
	var slides = document.getElementsByClassName(x);
	for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  	}
  	slides[n].style.display = "block";
}

function checkSize(n) {
	var i;
	var slides = document.getElementsByClassName("sizeDot");
  var currentColor = slides[n].style.backgroundColor;
	for (i = 0; i < slides.length; i++) {
    slides[i].style.backgroundColor = "#fff";  
  }
  if (currentColor == "rgb(0, 0, 0)") {
    slides[n].style.backgroundColor = "#fff";
  } else {
    slides[n].style.backgroundColor = "#000";
  }
}

function checkSizeDown(n) {
  var i;
  var slides = document.getElementsByClassName("sizeDot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.backgroundColor = "#fff";  
  }
  slides[n].style.backgroundColor = "#000";
}

function checkSizeUp(n) {
  var i;
  var sizes = ["Tiny", "Small", "Medium", "Large"];
  var slides = document.getElementsByClassName("sizeDot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.backgroundColor = "#fff";  
  }
  addTag(sizes[n]);
}

function checkColor(n) {
  var colors = ["Strawberry", "Blackberry", "Crazyberry", "Camouflage", "Night Moon", "Fire Orange"];
  addTag(colors[n]);
}

function addTag(x) {
  if (!filterTags.includes(x)){
    filterTags.push(x);
    var parent = document.getElementById("filterTagContainer");
    var tag = document.createElement("SPAN");
    tag.className = "filterTag";
    var tagName = document.createTextNode(x);
    tag.id = "filterTag" + x;
    tag.appendChild(tagName);
    parent.appendChild(tag);
    document.getElementById("filterTagContainer").addEventListener("click", function(e) {
      if (e.target && e.target.nodeName == "SPAN" && e.target.id == ("filterTag"+x)){
        deleteTag(e.target.id.replace("filterTag", ""));
      }
    });
    filterItems();
  }
}

function deleteTag(x) {
  var i;
  var deleteIndex = filterTags.indexOf(x);
  // console.log("delete element is at index " + deleteIndex);
  if (deleteIndex == 0){
    // console.log("when delete the first one");
    filterTags = filterTags.slice(1, filterTags.length);
  } else {
    // console.log("get here");
    var filterTagsHead = filterTags.slice(0, deleteIndex);
    var filterTagsTail = filterTags.slice(deleteIndex+1, filterTags.length);
    filterTags = filterTagsHead.concat(filterTagsTail);
  }
  var parent = document.getElementById("filterTagContainer");
  var tags = document.getElementsByClassName("filterTag");
  for (i = 0; i < tags.length; i++){
    if (tags[i].textContent==x) {
      parent.removeChild(tags[i]);
    }
  }
  filterItems();
}

function filterItems() {
  var i;
  var j;
  var products = document.getElementsByClassName("productsInd");
  for (i = 0; i < products.length; i++) {
    productTags = productDict[products[i].id];
    products[i].style.display = "none";
    for (j = 0; j<filterTags.length; j++) {
      if (!(sizes.includes(filterTags[j]) || colors.includes(filterTags[j]))){
        if (productTags.includes(filterTags[j])){
          products[i].style.display = "block";
        }
      }
    }
  }
  var flag = false;
  for (i = 0; i < products.length; i++) {
    if (products[i].style.display == "block"){
      flag = true;
    }
  }
  if(!flag){
    for (i = 0; i < products.length; i++) {
      products[i].style.display = "block";
    }
  }
}