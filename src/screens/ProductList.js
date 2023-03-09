import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const ProductList = ({route}) => {
  const {item} = route.params;
  const cat = item.category;

  const [medicineData, setMedicineData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const getData = async () => {
    const list = [];
    await firestore()
      .collection('Products')
      .get()
      .then(querySnapshot => {
        // console.log('Total users: ', querySnapshot.size);

        querySnapshot.forEach(documentSnapshot => {
          //  console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
          const {name, price, category,MRP} = documentSnapshot.data();
          if (category == cat) {
            list.push({
              name: name,
              price: price,
              category: category,
              id: Math.floor(new Date().getUTCMilliseconds() * Math.random()),
              mrp:MRP
            });
          }
        });
      });
    setMedicineData(list);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      {medicineData.length > 0 ? (
        <FlatList
          data={medicineData}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.itemView}>
                <Text style={{color: '#000',fontSize:20}}>{item.name}</Text>
                <Text>₹{item.price}</Text>
                <Text>M.R.P ₹{item.mrp}</Text>
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <Image
          source={require('../assets/nodata.jpg')}
          style={{width: '100%', height: '100%'}}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  category: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#73aced',
    padding: 10,
    borderRadius: 20,
    margin: '5%',
    elevation: 10,
  },
  categoryLabel: {
    marginTop: 10,
    color: '#fff',
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  itemView: {
    width: '90%',
    backgroundColor: '#b4ceed',
    height: 100,
    alignSelf: 'center',
    marginHorizontal: '5%',
    marginTop: 10,
    alignItems:'center',
    justifyContent:'center',

  },
});
