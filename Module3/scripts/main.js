
const allItems = restrictListProducts(products)
renderProductList(allItems)


function openInfo(evt, tabName) {

	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}
	

function populateListProductChoices(slct1) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById('displayProduct');
	
    s2.innerHTML = "";
	
	if (selectedRestrictions.has(s1.value)) {
		selectedRestrictions.delete(s1.value)
	  } else {
		selectedRestrictions.add(s1.value)
	  }

    var optionArray = restrictListProducts(products, s1.value);


	renderProductList(optionArray)
}
	

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	var para = document.createElement("P");
	para.innerHTML = "You have selected:";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is: " + getTotalPrice(chosenProducts)+" $"));
	openInfo(event, "Cart");
		
}

function priceFilter(a,b){
	return a.price > b.price ? 1:-1;
}


function renderProductList(optionArray){
	var s2 = document.getElementById('displayProduct');
	const sortedOptionArray = optionArray.sort(priceFilter);
	for (i = 0; i < sortedOptionArray.length; i++) {

		var label = document.createElement('label');
		label.className = "option_item";

	  var productName = sortedOptionArray[i].name;
	  var productPrice = sortedOptionArray[i].price;
		var productPicture = sortedOptionArray[i].picture;

	  var checkbox = document.createElement("input");
	  checkbox.type = "checkbox";
		checkbox.className = "checkbox";
	  checkbox.name = "product";
	  checkbox.value = productName;

		label.appendChild(checkbox);
		formattedPrice = (Math.round(productPrice * 100) / 100).toFixed(2);

		var optioninner = document.createElement("div");
		optioninner.className = "option_inner nutfree";
		var tick = document.createElement("div");
		tick.className = "tickmark";
		var icon = document.createElement("div");
		icon.className = "icon";
		var productImage = document.createElement("img");
		productImage.src = productPicture;
		productImage.alt = "";
		icon.appendChild(productImage);
		var prodtext = document.createElement("div");
		prodtext.className = "boxtext";
		var h2 = document.createElement("h2");
		h2.appendChild(document.createTextNode(`${productName} - $${formattedPrice}`));
		prodtext.appendChild(h2);
		optioninner.appendChild(tick);
		optioninner.appendChild(icon);
		optioninner.appendChild(prodtext);

		label.appendChild(optioninner);
	  s2.appendChild(label);

	  s2.appendChild(document.createElement("br"));
	}
  }