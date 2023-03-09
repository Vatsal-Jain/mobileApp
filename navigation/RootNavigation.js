import {StyleSheet, Text, View} from 'react-native';
import React ,{useState,useEffect} from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import auth from '@react-native-firebase/auth';

const RootNavigation = () => {
    

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;

    if (!user)  {
    return <AppStack />;
  }

  return <AppStack />;
};

export default RootNavigation;

const styles = StyleSheet.create({});



// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import auth from '@react-native-firebase/auth';

// function App() {
//   // Set an initializing state whilst Firebase connects
 

//   // Handle user state changes
 

//   if (!user) {
//     return (
//       <View>
//         <Text>Login</Text>
//       </View>
//     );
//   }

//   return (
//     <View>
//       <Text>Welcome {user.email}</Text>
//     </View>
//   );
// }
