import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../src/screens/WelcomeScreen';
import LoginScreen from '../src/screens/LoginScreen';
import SignUpScreen from '../src/screens/SignUpScreen';


const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
 
<Stack.Navigator initialRouteName='welcome' screenOptions={{headerShown:false}}>
    <Stack.Screen name='welcome' component={WelcomeScreen}/>
    <Stack.Screen name='login' component={LoginScreen} />
    <Stack.Screen name="signup" component={SignUpScreen} />
</Stack.Navigator>

  )
}

export default AuthStack

const styles = StyleSheet.create({})