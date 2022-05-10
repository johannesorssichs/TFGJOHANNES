import React, {Component} from 'react'; 
import {firebase} from './Firebase/firebase'
import {Platform, StyleSheet, Text, View, ImageBackground, Image, Button, Alert, variant, TouchableOpacity, Linking, Title, form, label, TextInput} from 'react-native';  
import signup1 from './signup1.jpg';
import image from './R4U.png';
import Boton from './ButtonWithBackground';
import ProductsList from './ProductsList';
import ProductDetails from './ProductDetails';
import App2 from './App2';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator,createAppContainer} from 'react-navigation';

export default function SignUp1({navigation}){
	return(
		<ImageBackground source = {require('./signup1.jpg')} style={styles.container}>
		<Image source = {require('./R4U.png')} style ={styles.imagen1}/>
		<Text style = {styles.genero}> [GÉNERO] </Text>
		<TextInput style = {styles.input1}/>
		<Text style = {styles.altura}> [ALTURA] </Text>
		<TextInput style = {styles.input2}/>
		<Text style = {styles.peso}> [PESO] </Text>
		<TextInput style = {styles.input3}/>
		<Text style = {styles.estilo}> [ESTILO] </Text>
		<TextInput style = {styles.input4}/>
		<Boton text = '[darme de alta]' color = 'white' style = {styles.botoncontinuar} onPress={() => navigation.navigate('App2')}/>
		</ImageBackground>
		);
}
	
	const styles = StyleSheet.create({  
  container: {  
    flex: 1,   
    justifyContent: 'center',  
    alignItems: 'center', 
  },
  imagen1: {
  position: 'absolute',
    top:-350,
    width: 250,
    height: 1000,
    resizeMode: 'contain',
  },
  genero:{
  	flex:1,
  	color:'white',
  	font: 'bold',
  	margin: 10,
  	top: 260,
  },
  input1:{
  	borderWidth:1,
  	borderColor: 'white',
  	padding: 8,
  	margin: 10,
  	width: 250,
  	font: 'bold',
  	top: 165,
  	backgroundColor: 'white',
  	borderRadius: 10,
  },
  altura:{
  	flex:1,
  	color:'white',
  	font: 'bold',
  	top: 153,
  	margin: 10,
  },
  input2:{
  	borderWidth:1,
  	borderColor: 'white',
  	padding: 8,
  	margin: 10,
  	width: 250,
  	font: 'bold',
  	top: 57,
  	backgroundColor: 'white',
  	borderRadius: 10,
  },
  peso:{
  	flex: 1,
  	color:'white',
  	font:'bold',
  	top: 53,
  },
  input3:{
  	borderWidth:1,
  	borderColor: 'white',
  	padding: 8,
  	margin: 10,
  	width: 250,
  	font: 'bold',
  	top: -36,
  	backgroundColor: 'white',
  	borderRadius: 10,
  },
  estilo:{
  	flex: 1,
  	color:'white',
  	font:'bold',
  	top:-39,
  },
  input4:{
  	borderWidth:1,
  	borderColor: 'white',
  	padding: 8,
  	margin: 10,
  	width: 250,
  	font: 'bold',
  	top: -127,
  	backgroundColor: 'white',
  	borderRadius: 10,
  },
  repetir:{
  	flex: 1,
  	color:'white',
  	font:'bold',
  	top:-45,
  }
});
