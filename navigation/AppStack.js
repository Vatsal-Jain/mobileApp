import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../src/screens/HomeScreen';
import Cart from '../src/screens/Cart';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import Categories from '../src/screens/Categories';
import Settings from '../src/screens/Settings';
import Purchase from '../src/screens/Purchase';
import PurchaseDetailed from '../src/screens/PurchaseDetailed';
import PurchaseYear from '../src/screens/PurchaseYear';
import ProductList from '../src/screens/ProductList';
import AddData from '../src/screens/AddData';
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const AppStack = () => {
  return (

    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='homeStack' component={HomeStack} />
    <Stack.Screen name='purchase' component={Purchase} />
    <Stack.Screen name='purchaseDetailed' component={PurchaseDetailed} />
    <Stack.Screen name='purchaseYear' component={PurchaseYear} />
    <Stack.Screen name='productList' component={ProductList} />
    <Stack.Screen name='addData' component={AddData} />
</Stack.Navigator>
  )
}

const HomeStack = () => {
    return(
      

<Tab.Navigator initialRouteName='home'
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;
  
              if (rn === 'home') {
                iconName = focused ? 'home' : 'home-outline';
  
              } else if (rn === 'cart') {
                iconName = focused ? 'cart' : 'cart-outline';
  
              }
              else if (rn === 'categories') {
                iconName = focused ? 'grid' : 'grid-outline';
  
              }
              else if (rn === 'settings') {
                iconName = focused ? 'settings' : 'settings-outline';
  
              }
            
              return <Ionicons name={iconName} size={24} color={color} />;
            },
            tabBarActiveTintColor: '#0071f2',
          tabBarInactiveTintColor: '#2f2e41',
           tabBarLabelStyle:{fontSize:12},
           tabBarStyle:{justifyContent:'center',alignItems:'center'},
           tabBarShowLabel:false,


        
          
          })
        }
        

         >



<Tab.Screen  name='home' component={HomeScreen} /> 
<Tab.Screen name='categories' component={Categories} />

<Tab.Screen name='cart' component={Cart} />
<Tab.Screen name="settings" component={Settings} />
</Tab.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})