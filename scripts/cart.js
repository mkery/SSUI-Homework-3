var costs = [20, 20, 80];

function decQuantity(n){
	var name = "quantityNum"+n;
	var cost = "cost"+n;
	var currentQuantity = parseInt(document.getElementById(name).textContent, 10) || 0;
	if (currentQuantity > 1){
		currentQuantity -= 1;
	}
	document.getElementById(name).innerHTML = currentQuantity;
	document.getElementById(cost).innerHTML = "$" + (currentQuantity * costs[n]);
	updateSubtotal();
}

function incQuantity(n){
	var name = "quantityNum"+n;
	var cost = "cost"+n;
	var currentQuantity = parseInt(document.getElementById(name).textContent, 10) || 0;
	currentQuantity += 1;
	document.getElementById(name).innerHTML = currentQuantity;
	document.getElementById(cost).innerHTML = "$" + (currentQuantity * costs[n]);
	updateSubtotal();
}

function updateSubtotal(){
	var subtotal = 0;
	var costs = document.getElementsByClassName("cartItemCost");
	for (i = 0; i < costs.length; i++){
		subtotal += (parseInt(costs[i].textContent.substring(1), 10) || 0);
	}
	document.getElementById("subtotalNum").innerHTML = "$" + subtotal;
}

// function deleteCart(x){
// 	var parent = document.getElementById("carItemsTable");
// 	var child = document.getElementById(x);
// 	parent.removeChild(child);
// }

function deleteCart(x) {
    var i = x.parentNode.parentNode.rowIndex;
    document.getElementById("carItemsTable").deleteRow(i);
    updateSubtotal();
}