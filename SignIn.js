import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View, ImageBackground, Image, Button, Alert, variant, TouchableOpacity, Linking, Title, form, label, TextInput, useNavigation} from 'react-native';  
import background from './login.jpg';
import image from './R4U.png';
import Boton from './ButtonWithBackground';
import SignUp from './SignUp';

import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

LogBox.ignoreAllLogs(true);

const Stack = createNativeStackNavigator();

export default function SignIn({navigation}){
	return(
		<ImageBackground source = {require('./login.jpg')} style={styles.container}>
		<Image source = {require('./R4U.png')} style ={styles.imagen1}/>
		<Text style = {styles.mail}> [E-MAIL] </Text>
		<TextInput style = {styles.input1}/>
		<Text style = {styles.contra}> [CONTRASEÑA] </Text>
		<TextInput style = {styles.input2}/>
    <Text style = {styles.cuenta} onPress={() => navigation.navigate('SignUp')}> [¿No tienes cuenta? Regístrate] </Text>
		<Boton text = '[continuar]' color = 'white' style = {styles.botoncontinuar} onPress={() => navigation.navigate('SignUp1')}/>
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
  input1:{
  	borderWidth:1,
  	borderColor: 'white',
  	padding: 8,
  	margin: 10,
  	width: 250,
  	font: 'bold',
  	top: 47,
  	backgroundColor: 'white',
  	borderRadius: 10,
  },
  mail:{
  	flex:1,
  	color:'white',
  	font: 'bold',
  	margin: 10,
  	top: 300,
  },
  input2:{
  	borderWidth:1,
  	borderColor: 'white',
  	padding: 8,
  	margin: 10,
  	width: 250,
  	font: 'bold',
  	top: -200,
  	backgroundColor: 'white',
  	borderRadius: 10,
  },
  contra:{
  	flex: 1,
  	color:'white',
  	font:'bold',
  	top:45,
  },
  cuenta:{
  color:'white',
  font:'bold',
  top:-100,
  textDecorationLine: 'underline',
  fontSize: 17
  }
});