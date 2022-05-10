import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View, ImageBackground, Image, Button, Alert, variant, TouchableOpacity, Linking, TextInput} from 'react-native';  
import background from './principal.jpg';
import image from './R4U.png';
import Boton from './ButtonWithBackground';
import SignUp from './SignUp';
import SignUp1 from './SignUp1';
import SignIn from './SignIn';
import {ProductsList} from './ProductsList';
import App2 from './App2';
import {CartIcon} from './CartIcon';
import {CartProvider} from './CartContext.js';
import {ProductDetails} from './ProductDetails';
import {Carts} from './Carts';
import {Product} from './Product';

import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

LogBox.ignoreAllLogs(true);

const Stack = createNativeStackNavigator();

const instructions = Platform.select({  
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',  
  android:  
    'Double tap R on your keyboard to reload,\n' +  
    'Shake or press menu button for dev menu',  
});  

function HomeScreen({navigation}) {
  return (
    /*<View style = {styles.container}>*/
      <ImageBackground source = {require('./principal.jpg')} style={styles.container}> 
      <Image source = {require('./R4U.png')} style ={styles.imagen}/>
        <Text style={styles.focus} onPress={() => Linking.openURL('https://ready4you.app')}>[focus on you]         [ulbl./ul.]</Text>  
        <Boton text = '[iniciar sesion]' color = 'white' onPress = {() => navigation.navigate('SignIn')} style={styles.boton1}/>
        <Boton text= '[registrarme]' color = 'white' onPress = {() => navigation.navigate('SignUp')} style={styles.boton2}/>
        <Boton text= '[entrar como invitado]' color = 'white' onPress = {() => Alert.alert('Intento de iniciar sesión como invitado')} style={styles.boton3}/>
        <Text style = {styles.footer} > Ir directamente a tienda </Text> 
      </ImageBackground>
      /*</View>*/ 
    
  );
  console.log(firebase);
}

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = "Home" component = {HomeScreen} />
        <Stack.Screen name = "SignUp" component = {SignUp} />
        <Stack.Screen name = "SignIn" component = {SignIn} />
        <Stack.Screen name = "SignUp1" component = {SignUp1} />
        <Stack.Screen name = "ProductsList" component = {ProductsList} />
        <Stack.Screen name = "Product" component = {Product} />
        <Stack.Screen name = "App2" component = {App2} />
        <Stack.Screen name = "CartIcon" component = {CartIcon} />
        <Stack.Screen name = "CartProvider" component = {CartProvider} />
        <Stack.Screen name = "ProductDetails" component = {ProductDetails} />
        <Stack.Screen name = "Carts" component = {Carts} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,   
    justifyContent: 'center',  
    alignItems: 'center', 
  },  
  imagen: {
    flex: 1,
    position: 'absolute',
    top:-350,
    width: 300,
    height: 1000,
    resizeMode: 'contain',
  },
  focus: {  
    fontSize: 25,
    fontFamily: 'helvetica',  
    textAlign: 'center',  
    margin: '10%', 
    color: 'white',
    font: 'bold',
    top: -23,
  },  
  instructions: {  
    textAlign: 'center',  
    color: '#333333',  
    marginBottom: 1,
    color: 'white',  
  }, 
  footer: {
    fontSize: 16,
    color: 'white',
    font: 'bold',
    bottom: -80,
    textDecorationLine: 'underline'
  }
});  

