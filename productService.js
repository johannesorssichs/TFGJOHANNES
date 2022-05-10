const PRODUCTS = [
	{
		id: 100,
		name: 'FF Hoodie',
		price: 52,
		image: require('./ropa/scuffers/ff_hoodie.png'),
		description: 'Ultra-heavyweight oversize boxy fit hooded sweatshirt in green color. Oversize "FF" logo silkscreen print on hood back in rose color. Puller for adjusting on the crewneck in yellow color. '
	},
	{
		id: 101,
		name: 'Deslited Hoodie',
		price: 52,
		image: require('./ropa/scuffers/deslited_hoodie.png'),
		description: 'Ultra-heavyweight oversize boxy fit hooded sweatshirt in dark rose color. ’Scuffers’ Logo serigraphed on the left side of the crewneck. Unpicked effect on the crewneck, on sleeve cuffs and on the bottom. '
	},
	{
		id: 102,
		name: 'Passion Hoodie Mustard',
		price: 64,
		image: require('./ropa/scuffers/passion_hoodie_mustard.png'),
		description: 'Ultra-heavyweight oversize boxy fit hooded sweatshirt in mustard color. Oversize "Its called Passion" logo silkscreen print on front in green color. "'
	},
	{
		id: 103,
		name: 'Small Talk Hoodie',
		price: 64,
		image: require('./ropa/scuffers/small_talk_hoodie.png'),
		description: 'Ultra-heavyweight oversize boxy fit hooded sweatshirt in orange color. Oversize "Scuffersstudios" logo silkscreen print on front in white color. Oversize quote logo printed in white color on the back.'
	}
];
export function getProducts(){
	return PRODUCTS;
}
export function getProduct(id){
	return PRODUCTS.find((product) => (product.id == id));
}


