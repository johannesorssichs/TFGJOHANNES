import React, {Component} from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Button} from 'react-native';

const buttonWithBackground = props => {
	const content = (

		<View style = {[styles.button, {backgroundColor: props.color}]}>
			<Text style = {styles.text}>{props.text}</Text>
		</View>
		)

	return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
	button:{
		padding: 16,
		alignItems: 'center',
		margin: 15,
		borderRadius: 10,
		width: 250
	},
	text:{
		fontSize: 20,
		font: 'bold',
		color: 'black'
	}
}); 

export default buttonWithBackground;