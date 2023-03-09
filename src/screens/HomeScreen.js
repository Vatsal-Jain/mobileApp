import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'
import BottomTabNavBar from '../components/BottomTabNavBar'
import Icon from 'react-native-vector-icons/Ionicons'

const HomeScreen = () => {
  return (
    <View style={styles.container}>

     <View style={styles.searchContainer}>
<TextInput 
placeholder='search'
style={styles.searchinput}
/> 
<Icon  name="search" size={20} color="#000" />
     </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'

    },
    searchContainer:{
      flexDirection:'row',
      backgroundColor:'#ede9df',
    margin:10,
    borderRadius:10,
    paddingHorizontal:10,
    alignItems:'center',
    justifyContent:'space-between'
      
    },
    searchinput:{
      
    }
})