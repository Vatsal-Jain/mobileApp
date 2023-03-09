import { StyleSheet, Text, View, Image,Pressable,TouchableOpacity,FlatList } from 'react-native'
import React from 'react'


const Categories = ({navigation}) => {
  const itemData = [
    {
      id:1,
      name:'Medicine & Tablets',
      src:require('../assets/pill.png'),
      category:'Medicine'

    },
    {
      id:2,
      name:'Injectables',
      src:require('../assets/injection.png')
    },
    {
      id:3,
      name:'Suspensions',
      src:require('../assets/syrup.png'),
      category:'Suspensions'
    },
    {
      id:4,
      name:'Ointment',
      src:require('../assets/ointment.png'),
      category:'Ointment',
    },
    {
      id:5,
      name:'Derma',
      src:require('../assets/derma.png'),
      category:'Derma',
    },
    {
      id:6,
      name:'Surgical',
      src:require('../assets/mask.png')
    },
    {
      id:7,
      name:'Eye Drops',
      src:require('../assets/drop.png')
    },
    {id:8,
    name:'Iv Fluids',
    src:require('../assets/ivfluid.png')
  }
  ]
  return (
    <View style={styles.container}>
    

    <FlatList 
      data={itemData}
      keyExtractor={(item) =>item.id}
      numColumns={2}
      contentContainerStyle={{}}
      
      renderItem={({item}) => {
        return(

      <TouchableOpacity style={styles.category} onPress={() => navigation.navigate('productList',{
        item: item,
      
      })}>
        <Image 
        source={item.src}
        style={{width:80,height:80}}
        resizeMode="contain"
        />
       <Text style={styles.categoryLabel}>{item.name}</Text>
      </TouchableOpacity>
        )
      }}
      />


  
      </View>
    
  )
}

export default Categories

const styles = StyleSheet.create({
    container :{
        flex: 1,
  
        alignItems:'center',
        justifyContent:'center'
    },
    category:{
   width:'40%',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'#4193f0',
        padding:10,
        borderRadius:20,
        margin:'5%',
        elevation:10
    },
    categoryLabel:{
        marginTop:10,
        color:'#fff'
    }
})