	 

const selectedRestrictions = new Set()

var products = [
	{
		name: "Brocoli",
		picture: "images/broccoli.jpeg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		price: 2.00
	},
	{
		name: "Bread",
		picture: "images/bread.jpeg",
		LactoseFree: false,
		NutFree: false,
		isOrganic:true,
		price: 2.50
	},
	{
		name: "Tomato",
		picture: "images/tomato.jpeg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		price: 4.00
	},
	{
		name: "Organic Cheese",
		picture: "images/organiccheese.png",
		LactoseFree: false,
		NutFree: true,
		isOrganic:true,
		price: 3.50
	},
	{
		name: "Cheese",
		picture: "images/cheese.jpeg",
		LactoseFree: false,
		NutFree: true,
		isOrganic:false,
		price: 2.50
	},
	{
		name: "Salmon",
		picture: "images/salmon.jpeg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:false,
		price: 10.00
	},
	{
		name: "Apple",
		picture: "images/apple.jpeg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:false,
		price: 1.50
	},
	{
		name: "Milk",
		picture: "images/milk.jpeg",
		LactoseFree: false,
		NutFree: true,
		isOrganic:true,
		price: 8.50
	},
	{
		name: "Almonds",
		picture: "images/almonds.jpeg",
		LactoseFree: true,
		NutFree: false,
		isOrganic:true,
		price: 2.00
	},
	{
		name: "Rice",
		picture: "images/rice.jpeg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:false,
		price: 13.00
	},
	{
		name: "Honey",
		picture: "images/honey.jpeg",
		LactoseFree: true,
		NutFree: false,
		isOrganic:false,
		price: 6.00
	},
	{
		name: "Avacado",
		picture: "images/avocado.jpeg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:false,
		price: 4.00
	},
	{
		name: "Strawberry",
		picture: "images/strawberry.jpeg",

		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		price: 2.00
	},
	{
		name: "Banana",
		picture: "images/banana.jpeg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		price: 1.50
	},
];
	

function restrictListProducts(prods) {
	let filteredProducts = [];
	for (let i = 0; i < prods.length; i += 1) {
	  if ((selectedRestrictions.has("Lactose-Free")) && (prods[i].LactoseFree == false)){
		continue;
	  }
	  if ((selectedRestrictions.has("Nut-Free")) && (prods[i].NutFree == false)){
		continue;
	  }
	  if ((selectedRestrictions.has("Organic")) && (prods[i].isOrganic == false)){
		continue;
	  }
	  filteredProducts.push(prods[i]);
	}
	return filteredProducts;
  }

function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}