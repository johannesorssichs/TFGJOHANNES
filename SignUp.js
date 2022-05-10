import React, {Component} from 'react'; 
import {firebase} from './Firebase/firebase'
import {Platform, StyleSheet, Text, View, ImageBackground, Image, Button, Alert, variant, TouchableOpacity, Linking, Title, form, label, TextInput, useNavigation} from 'react-native';  
import registro from './registro.jpg';
import image from './R4U.png';
import Boton from './ButtonWithBackground';
import SignUp1 from './SignUp1';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator,createeAppContainer} from 'react-navigation';

const Stack = createNativeStackNavigator();

export default function SignUp({navigation}){

	return(
		<ImageBackground source = {require('./registro.jpg')} style={styles.container}>
		<Image source = {require('./R4U.png')} style ={styles.imagen1}/>
		<Text style = {styles.nombre}> [NOMBRE Y APELLIDO] </Text>
		<TextInput style = {styles.input1}/>
		<Text style = {styles.mail}> [E-MAIL] </Text>
		<TextInput style = {styles.input2}/>
		<Text style = {styles.fecha}> [FECHA DE NACIMIENTO] </Text>
		<TextInput style = {styles.input3}/>
		<Text style = {styles.contra}> [CONTRASEÑA] </Text>
		<TextInput style = {styles.input4}/>
		<Text style = {styles.repetir}> [REPETIR CONTRASEÑA] </Text>
		<TextInput style = {styles.input5}/>
		<Boton text = '[continuar]' color = 'white' style = {styles.botoncontinuar} style = {styles.botoncontinuar} onPress={() => navigation.navigate('SignUp1')} />
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
  nombre:{
  	flex:1,
  	color:'white',
  	font: 'bold',
  	top: 250,
  	margin: 10,
  	top: 200,
  },
  input1:{
  	borderWidth:1,
  	borderColor: 'white',
  	padding: 8,
  	margin: 10,
  	width: 250,
  	font: 'bold',
  	top: 140,
  	backgroundColor: 'white',
  	borderRadius: 10,
  },
  mail:{
  	flex:1,
  	color:'white',
  	font: 'bold',
  	top: 250,
  	margin: 10,
  	top: 130,
  },
  input2:{
  	borderWidth:1,
  	borderColor: 'white',
  	padding: 8,
  	margin: 10,
  	width: 250,
  	font: 'bold',
  	top: 65,
  	backgroundColor: 'white',
  	borderRadius: 10,
  },
  fecha:{
  	flex: 1,
  	color:'white',
  	font:'bold',
  	top: 65,
  },
  input3:{
  	borderWidth:1,
  	borderColor: 'white',
  	padding: 8,
  	margin: 10,
  	width: 250,
  	font: 'bold',
  	top: 10,
  	backgroundColor: 'white',
  	borderRadius: 10,
  },
  contra:{
  	flex: 1,
  	color:'white',
  	font:'bold',
  	top:10,
  },
  input4:{
  	borderWidth:1,
  	borderColor: 'white',
  	padding: 8,
  	margin: 10,
  	width: 250,
  	font: 'bold',
  	top: -45,
  	backgroundColor: 'white',
  	borderRadius: 10,
  },
  repetir:{
  	flex: 1,
  	color:'white',
  	font:'bold',
  	top:-45,
  },
  input5:{
  	borderWidth:1,
  	borderColor: 'white',
  	padding: 8,
  	width: 250,
  	font: 'bold',
  	top: -95,
  	backgroundColor: 'white',
  	borderRadius: 10,
  },
});

