import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Product from './Product';
import {getProducts} from './productService.js';

export function ProductsList({navigation}){
	function renderProduct({item: product}){
		return(
			<Product {...product}
			onPress={() => {
				navigation.navigate('ProductDetails', {
					productId: product.id,
				});
			}}
			/>
		);
}

const [product, setProducts] = useState([]);

useEffect(() => {
	setProducts(getProducts());
});

return(
	<FlatList
		style = {styles.productsList}
		contentContainerStyle={styles.productsListContainer}
		keyExtractor={(item) => item.id.toString()}
		data={product}
		renderItem={renderProduct}
	/>
	);
}
const styles = StyleSheet.create({
	productsList:{
		backgroundColor: '#d9d9d9',
	},
	productsListContainer:{
		backgroundColor: '#d9d9d9',
		paddingVertical: 8,
		marginHorizontal: 8,
	},
});
