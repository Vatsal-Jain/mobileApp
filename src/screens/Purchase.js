import { StyleSheet, Text, View ,TouchableOpacity,FlatList} from 'react-native'
import React from 'react'
import globalStyles from '../constants/globalStyles'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Purchase = ({navigation,route}) => {
    const {year} = route.params;
    const purchaseData = [
        {
            id:1,
            name:'January',
           
        },
        {
            id:2,
            name:'Feburary'
        },
        {
            id:3,
            name:'March'
        },
        {
            id:4,
            name:'April',
          
            

        },
        {
            id:5,
            name:'May'
        },
        {
            id:6,
            name:'June'
        },
        {
            id:7,
            name:'July'
        },
        {
            id:8,
            name:'August'
        },
        {
            id:9,
            name:'September'
        },
        {
            id:10,
            name:'October'
        }
        ,
        {
            id:11,
            name:'November'
        }
        ,
        {
            id:12,
            name:'December'
        }
    ]
  return (
    <View style={styles.container}>
        <Text style={styles.headingText}>{year.name} Purchase bill</Text>
      <FlatList 
      data={purchaseData}
      keyExtractor={(item) =>item.id}
      renderItem={({item}) => {
        return(
            <TouchableOpacity style={styles.element} onPress={() => navigation.navigate('purchaseDetailed',{
                item: item,
                year :year.name
              })}> 
                <Text style={styles.nameText}>{item.name} {year.name}</Text>
                <Ionicons name="chevron-forward" size={20} color={'black'} />
            </TouchableOpacity>
        )
      }}
      />
    </View>
  )
}

export default Purchase

const styles = StyleSheet.create({
    container:{
flex:1,

    },

    nameText:{
        color:'#000',
        
    },
    element:{
        width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderTopColor: '#ede9df',
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    },
    headingText:{
        textAlign:'center',
        margin:10,
        fontSize:25,
        padding:10
    }
})