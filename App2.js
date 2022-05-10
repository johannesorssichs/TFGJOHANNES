import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductsList} from './ProductsList';
import {ProductDetails} from './ProductDetails';
import {Product} from './Product';
import {Carts} from './Carts';
import {CartIcon} from './CartIcon'
import {CartContext} from './CartContext.js';

const Stack = createNativeStackNavigator();

function App2({navigation}){
	return (
		
		<CartContext>
		
			
				<Stack.Screen name = 'Product' component = {ProductsList}
				options = {({navigation}) => ({
					title: 'Product',
					headerTitleStyle: styles.headerTitle,
					headerRight: () => <CartIcon navigation = {navigation}/>
				})}/>
				<Stack.Screen name = 'ProductDetails' component = {ProductDetails}
				options = {({navigation}) => ({
					title: 'Product details',
					headerTitleStyle: styles.headerTitle,
					headerRight: () => <CartIcon navigation={navigation}/>
				})}/>
				<Stack.Screen name = 'Cart' component = {Carts}
				options = {({navigation}) => ({
					title: 'My Cart',
					headerTitleStyle: styles.headerTitle,
					headerRight: () => <CartIcon navigation={navigation}/>
				})}/>
			

		</CartContext>

		);
}

const styles = StyleSheet.create({
	headerTitle: {
		fontSize: 18
	}
});
export default App2;