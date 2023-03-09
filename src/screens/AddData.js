import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React,{useState} from 'react'
import DropDownPicker from 'react-native-dropdown-picker';

const AddData = () => {

    const [openBrand, setOpenBrand] = useState(false);
    const [valueBrand, setValueBrand] = useState(null);
    const [openCategory, setOpenCategory] = useState(false);
    const [valueCategory, setValueCategory] = useState(null);
    const [items, setItems] = useState([
      {label: 'Medicine', value: 'Medicine'},
      {label: 'Suspensions', value: 'Suspensions'}
    ]);

    const [brands, setBrands] = useState([
        {label: 'Torrent Pharma', value: 'Torrent Pharma'},
        {label: 'Kivi Labs', value: 'Kivi Labs'}
      ]);
  return (
    <View style={{alignItems:'center'}}>
      <Text>AddData</Text>
<View style={{width:'90%',margin:10}}>
      <Text style={styles.text}>Name</Text>
      <TextInput
      placeholder='enter product name'
      style={styles.textInput}
      />
      </View>

      <View style={{width:'90%',margin:10}}>
      <Text style={styles.text}>Brand Name</Text>
      <DropDownPicker
      open={openBrand}
      value={valueBrand}
      items={brands}
      setOpen={setOpenBrand}
      setValue={setValueBrand}
      setItems={setBrands}
      zIndex={2000}
      zIndexInverse={1000}
   
      style={{borderRadius:10, backgroundColor:'#b4ceed'}}
      textStyle={{color:'#000'}}
    />
      </View>
      <View style={{width:'90%',margin:10}}>
      <Text style={styles.text}>Category</Text>
      <DropDownPicker
      open={openCategory}
      value={valueCategory}
      items={items}
      setOpen={setOpenCategory}
      setValue={setValueCategory}
      zIndex={1000}
      zIndexInverse={2000}
      setItems={setItems}
     
      style={{borderRadius:10, backgroundColor:'#b4ceed'}}
      textStyle={{color:'#000'}}
    />
      </View>
    </View>
  )
}

export default AddData

const styles = StyleSheet.create({
    textInput:{
        width:'100%',
        backgroundColor:'#b4ceed',
        borderRadius:10
        
    },
    text:{
        marginBottom:10
    }
})