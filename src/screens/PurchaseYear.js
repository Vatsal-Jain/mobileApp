import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native'
import React from 'react'

const PurchaseYear = ({navigation}) => {
    const purchaseData = [
        {
            id:1,
            name:'2023'
        },
        {
            id:2,
            name:'2022'
        },
        {
            id:3,
            name:'2021'
        },
        {
            id:4,
            name:'2020',
            

        },
        {
            id:5,
            name:'2019'
        },
        {
            id:6,
            name:'2018'
        },
        {
            id:7,
            name:'2017'
        },
        {
            id:8,
            name:'2016'
        },
        {
            id:9,
            name:'2015'
        },
        {
            id:10,
            name:'2014'
        }
        ,
        {
            id:11,
            name:'2013'
        }
        ,
        {
            id:12,
            name:'2012'
        }
    ]
  return (
    <View style={styles.container}>
          <Text style={styles.headingText}>Select Year</Text>
          <FlatList 
      data={purchaseData}
      numColumns={3}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => {
        return(
       <TouchableOpacity style={styles.category} onPress={() => navigation.navigate('purchase',{
        year:item
       })}>
    
        <Text style={styles.categoryLabel}>{item.name}</Text>
      </TouchableOpacity>
        )}}

        />
    </View>
  )
}

export default PurchaseYear

const styles = StyleSheet.create({
    container :{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        
        
      
        
    },
    category:{
 
        alignItems:'center',
       
        backgroundColor:'#4193f0',
        padding:20,
        borderRadius:20,
        margin:10,
        elevation:10,
        
    },
    categoryLabel:{
        fontSize:20,
        color:'#fff'
    },
    headingText:{
        textAlign:'center',
        margin:10,
        fontSize:25,
        padding:10
    },
})