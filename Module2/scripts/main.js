
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
		
}

function priceFilter(a,b){
	return a.price > b.price ? 1:-1;
}

function renderProductList(optionArray){
	var s2 = document.getElementById('displayProduct');
	const sortedOptionArray = optionArray.sort(priceFilter);
	for (i = 0; i < sortedOptionArray.length; i++) {
  
	  var productName = sortedOptionArray[i].name;
	  var productPrice = sortedOptionArray[i].price;

	  var checkbox = document.createElement("input");
	  checkbox.type = "checkbox";
	  checkbox.name = "product";
	  checkbox.value = productName;
	  s2.appendChild(checkbox);
  
	  formattedPrice = (Math.round(productPrice * 100) / 100).toFixed(2);
  
	  var label = document.createElement('label')
	  label.htmlFor = productName;
	  label.appendChild(document.createTextNode(`${productName} - $${formattedPrice}`));
	  s2.appendChild(label);
  
	  s2.appendChild(document.createElement("br"));
	}
  }