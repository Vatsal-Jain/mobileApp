import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const BottomTabNavBar = () => {
  return (
   <View style={styles.bottomNavContainer}>
    <TouchableOpacity style={styles.element}>
        <Text>Home</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.element}>
        <Text>Home</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.element}>
        <Text>Home</Text>
    </TouchableOpacity>
   </View>
  )
}

export default BottomTabNavBar

const styles = StyleSheet.create({
    bottomNavContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        position:'absolute',
        bottom:0,
        width:'100%',
        backgroundColor:'blue',
        padding:10
    },
    element:{
        backgroundColor:'red',
        padding:10
    }
})