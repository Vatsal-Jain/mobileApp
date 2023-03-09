import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PhotoPickerModal from '../components/organims/PhotoPickerModal';
import ImagePicker from 'react-native-image-crop-picker';
const Settings = ({navigation}) => {
  const [resource, setResource] = useState('');
  const [profile, setProfile] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const chooseFile = async () => {
    const grantedstorage = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'App Storage Permission',
        message: 'App needs access to your storage ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (grantedstorage === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('storage permission given');

      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      })
        .then(image => {
          setResource(image.path);
          setProfile(true);
          setModalVisible(!modalVisible);
        })
        .catch(err => console.log(err.code));
    } else {
      console.log('storage permsiion not given');
    }
  };
  const camera = async () => {
    const grantedcamera = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'App Camera Permission',
        message: 'App needs access to your camera ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    if (grantedcamera === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Camera permission given');

      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      })
        .then(image => {
          setResource(image.path);
          setProfile(true);

          setModalVisible(!modalVisible);
        })
        .catch(err => console.log(err.code));
    } else {
      console.log('camera permsiion not given');
    }
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.blueBlock}>
        <TouchableOpacity
          style={styles.imgTouchable}
          onPress={() => setModalVisible(!modalVisible)}>
          {!profile ? (
            <Image
              source={require('../assets/vatsal.png.jpg')}
              style={{width: 120, height: 120, borderRadius: 60}}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={{uri: resource}}
              style={{width: 120, height: 120, borderRadius: 60}}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>
        <Text style={styles.profileName}>Vatsal Jain</Text>
      </View>

      <PhotoPickerModal
        data={{
          modalVisible: modalVisible,
          setModalVisible: setModalVisible,
          chooseFile: chooseFile,
          camera: camera,
        }}
      />

      <View style={{flexDirection: 'column'}}>
        <TouchableOpacity style={styles.element}>
          <Text style={styles.text}>Orders</Text>

          <Ionicons name="chevron-forward" size={20} color={'black'} />
        </TouchableOpacity>

    

        <TouchableOpacity style={styles.element} onPress={() => navigation.navigate('purchaseYear')}>
          <Text style={styles.text}>Purchase</Text>

          <Ionicons name="chevron-forward" size={20} color={'black'} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.element}>
          <Text style={styles.text}>Prescriptions</Text>
          <Ionicons name="chevron-forward" size={20} color={'black'} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.element} onPress={() => navigation.navigate('addData')}>
          <Text style={styles.text}>Add Data</Text>
          <Ionicons name="chevron-forward" size={20} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.element}>
          <Text style={styles.text}>Most Purchased</Text>
          <Ionicons name="chevron-forward" size={20} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.element}>
          <Text style={styles.logouttext}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  element: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderTopColor: '#ede9df',
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: '#000',
    fontSize: 15,
  },
  logouttext: {
    color: 'red',
  },
  blueBlock: {
    padding: 10,
    alignItems: 'center',
  },
  imgTouchable: {
    width: 120,
    height: 120,
    backgroundColor: '#0071f2',
    alignItems: 'center',
    borderRadius: 60,
  },
  profileName: {
    fontSize: 18,
    margin: 10,
    color:"#000"
  },
});
