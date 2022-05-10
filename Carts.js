import React, {useEffect, useState, useContext} from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { CartContext } from './CartContext'
export function Carts ({navigation}){
	const{items, getItemsCount, getTotalPrice} = useContext(CartContext);

	function Totals(){
		let[total, setTotal] = useState(0);
		useEffect(() => {
			setTotal(getTotalPrice());
		});
		return(
			<View style = {styles.cartLineTotal}>
				<Text style = {[styles.lineleft, styles.lineTotal]}>Total</Text>
				<Text style = {styles.lineRight}> € {total} </Text>
			</View>
		);
	}
	function renderItem({item}){
		return(
		<View style = {styles.cartLine}>
			<Text style = {styles.lineLeft}> {item.product.name} x {item.qty}</Text>
			<Text style = {styles.lineRight}> € {item.totalPrice} </Text>
		</View>
		);
	}
	return(
	<FlatList
		style = {styles.itemsList}
		contentContainerStyle = {styles.itemsListContainer}
		data = {items}
		renderItem = {renderItem}
		keyExtractor = {(item) => item.product.id.toString()}
		ListFooterComponent = {Totals}
	/>
	);
}

const styles = StyleSheet.create({
	cartLine: {
		flexDirection: 'row',
	},
	cartLineTotal: {
		flexDirection: 'row',
		borderTopColor: '#ccc',
		borderTopWidth: 2
	},
	lineTotal:{
		fontWeight: 'bold',
	},
	lineLeft: {
		fontSize: 18,
		lineHeight: 25,
		color: '#000'
	},
	lineRight: {
		flex: 1,
		fontSize: 18,
		fontWeight: '600',
		lineHeight: 35,
		color: '#000',
		textAlign: 'right',
	},
	itemsList: {
		backgroundColor: '#ddd',
	},
	itemsListContainer: {
		backgroundColor: '#ddd',
		paddingVertical: 10,
		marginHorizontal: 10,
	},
});