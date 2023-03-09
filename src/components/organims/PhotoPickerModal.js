import {StyleSheet, Text, Modal, View, TouchableOpacity} from 'react-native';
import React from 'react';

const PhotoPickerModal = ({data}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={data.modalVisible}
      onRequestClose={() => {
        data.setModalVisible(!data.modalVisible);
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#000000AA',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() =>
            data.setModalVisible(!data.modalVisible)
          }></TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              height: 172,
              borderRadius: 29,
              width: 338,
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  fontSize: 17,
                  color: '#292929',
                }}>
                Please Select Image Source
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderTopWidth: 1,
                borderTopColor: '#DCDCDC',
                width: '80%',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flex: 1,
              }}>
              <TouchableOpacity
                onPress={data.camera}
                style={{
                  padding: 10,
                  borderColor: '#0071f2',
                  borderWidth: 1,
                  borderRadius: 10,
                  backgroundColor: '#fff',
                  width: 100,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: 19,
                    color: '#0071f2',
                  }}>
                  Camera
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  borderRightColor: '#CECECE',
                  borderRightWidth: 1,
                  height: 33,
                  marginVertical: 20,
                }}></Text>
              <TouchableOpacity
                onPress={data.chooseFile}
                style={{
                  padding: 10,
                  borderColor: '#0071f2',
                  borderWidth: 1,
                  borderRadius: 10,
                  backgroundColor: '#0071f2',
                  width: 100,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: 19,
                    color: '#fff',
                  }}>
                  Gallery
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{flex: 1}}
          onPress={() =>
            data.setModalVisible(!data.modalVisible)
          }></TouchableOpacity>
      </View>
    </Modal>
  );
};

export default PhotoPickerModal;

const styles = StyleSheet.create({});
