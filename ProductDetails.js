import react, {useEffect, useState, useContext} from 'react';
import{
	Text,
	Image,
	View, 
	ScrollView,
	SafeAreaView,
	Button,
	StyleSheet,
} from 'react-native';
import {getProduct} from './productService.js';
import {CartContext} from './CartContext';
export function ProductDetails({route}){
	const{ productId } = route.params;
	const [product,setProduct] = useState({});

	const { addItemtoCart } = useContext(cartContext);

	useEffect(() => {
		setProduct(getProduct(productId));
	});

	function onAddToCart(){
		addItemToCart(product.id);
	}

	return(
		<SafeAreaView>
			<ScrollView>
				<Image
				style = {styles.image}
				source = {product.image}
				/>
				<View style = {styles.infoContainer}>
				<Text style = {styles.name}> {product.name} </Text>
				<Text style = {styles.price}> € {product.price} </Text>
				<Text style = {styles.description}> {product.description} </Text>
					<Button
					onPress = {onAddToCart}
					title = "Add to cart"
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
		);
}

const styles = StyleSheet.create({
	card:{
		backgroundColor: '#dddddd',
		borderRadius: 20,
		shadowOpacity: 0.25,
		shadowRadius: 5,
		shadowColor: "#000",
		shadowOffset: {
			height: 0,
			width: 0,
		},
		elevation: 1,
		marginVertical: 18,
	},
	image:{
		height: 320,
		width: '100%'
	},
	infoContainer:{
		padding: 25,
	},
	name:{
		fontSize: 21,
		fontWeight: 'normal',
	},
	price:{
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	description:{
		fontSize:15,
		fontWeight: 'normal',
		color: '#333',
		marginBottom: 18,
	},
});