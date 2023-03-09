import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  ActivityIndicator
} from 'react-native';
import React, {useEffect, useState} from 'react';
import globalStyles from '../constants/globalStyles';
import Pdf from 'react-native-pdf';
import storage from '@react-native-firebase/storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RNFetchBlob from 'rn-fetch-blob';

const PurchaseDetailed = ({route}) => {
  const [pdfUrl, setPdfUrl] = useState('');
  const [isloading,setIsLoading] = useState(true)

  useEffect(() => {

    getDownloadURL();
    
    
  }, []);

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Download App Storage Permission',
          message: 'App needs access to your storage to download files ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        downloadFile();
      } else {
        console.log('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const downloadFile = () => {
    const {config, fs} = RNFetchBlob;
    const fileDir = fs.dirs.DownloadDir;
    const date = new Date();

    RNFetchBlob.config({
      // add this option that makes response data to be stored as a file,
      // this is much more performant.
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: fileDir + `/${item.name}_${year}.pdf`,
        description: 'file downloaded',
      },
    })
      .fetch('GET', pdfUrl, {
        //some headers ..
      })
      .then(res => {
        // the temp file path
        console.log('The file saved to ', res.path());
      });
  };

  const {item, year} = route.params;
  const ref = `/Purchase/${year}/${item.name}_${year}.pdf`;
  const getDownloadURL = async () => {
    console.log('hi');
    await storage()
      .ref(`/Purchase/${year}/${item.name}_${year}.pdf`)
      .getDownloadURL()
      .then(url => {
        setIsLoading(true)
        console.log('link from firebase is ', url);
        setPdfUrl(url);
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false)
      });
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 0.1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.headingText}>
          {item.name} {year} Bill
        </Text>
      </View>
      <View
        style={{
          flex: 0.8,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}>

            {isloading == true ? (
  <ActivityIndicator />
            )
        :
        (
            pdfUrl  ? (
                <Pdf
                  trustAllCerts={false}
                  source={{uri: pdfUrl}}
                  onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                  }}
                  onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                  }}
                  onError={error => {
                    console.log(error);
                  }}
                  onPressLink={uri => {
                    console.log(`Link pressed: ${uri}`);
                  }}
                  style={styles.pdf}
                />
              ) : (
                <Image
                  source={require('../assets/nodata.jpg')}
                  style={{width: '100%', height: '100%'}}
                  resizeMode="contain"
                />
              )
        )
        }
       
            
   

            
      </View>
      <View style={{flex: 0.1, alignItems: 'center', justifyContent: 'center'}}>
        {pdfUrl ? (
          <TouchableOpacity
            style={styles.downloadButton}
            onPress={requestStoragePermission}>
            <Text style={styles.buttonText}>Download File</Text>
            <Icon name="file-download" size={20} color="#fff" />
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>
    </View>
  );
};

export default PurchaseDetailed;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,

    color: '#000',
    fontWeight: '600',
    fontFamily: 'notoserif',
  },
  pdf: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  downloadButton: {
    backgroundColor: '#2f2e41',
    width: '90%',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 30,

    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    marginHorizontal: '30%',
  },
});
