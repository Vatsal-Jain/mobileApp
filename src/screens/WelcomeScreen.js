import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import globalStyles from '../constants/globalStyles'
import WelcomeLogo from '../assets/svg/Pharmacist.svg'

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={globalStyles.container}>
    
   
    <WelcomeLogo height="70%" width="100%"  />



  

    <Text style={styles.title}>Looking For a Solution, We got you need covered</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
        <Text style={styles.btnText}>Next</Text>
    </TouchableOpacity>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    logoContainer:{
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
fontSize:20,
color:'#000',
margin:20
    },
    button:{
        padding:15,
        backgroundColor:'#0071f2',
        width:'90%',
        bottom:0,
        position:'absolute',
        marginBottom:20,
        alignSelf:'center',
        borderRadius:20,
        alignItems:'center'
        
    },
    btnText:{
        color:'#fff',
        fontSize:20
    },
    title:{
        color:'#000',
        fontSize:20,
        textAlign:'center',
        margin:20,
        lineHeight:32,
        letterSpacing:0.5
    },
  
})