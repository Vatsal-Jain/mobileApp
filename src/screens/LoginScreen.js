import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator
} from 'react-native';
import React ,{useState} from 'react';
import Logo from '../assets/svg/Pharmacy.svg';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const LoginScreen = ({navigation}) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [emailError,setEmailError] = useState('')
  const [passwordError,setPasswordError] = useState('')
  const [isloading,setIsLoading] = useState(false)


  var re = /\S+@\S+\.\S+/;

  const handleLoginButton = () => {

    if(re.test(email) == false){
      setEmailError("Enter Valid Email Address")
      return
    }
    else{
      setEmailError('')

    }
    if(password.length < 8){
      setPasswordError("Please Enter Password of atleast 8 Characters")
      return
    }
    else{
      setPasswordError('')
    }
    setIsLoading(true)
    navigation.navigate('home')
    setIsLoading(false)
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Logo width="90%" height="50%" style={{aspectRatio: 1}} />
      <TextInput
        placeholder="Enter Your Email"
        style={emailError ? styles.inputBoxError : styles.emailBox}
        placeholderTextColor="#fff"
        value={email}
        onChangeText={(text) => setEmail(text)}
       
      />
      {emailError &&  <Text style={styles.errorText}>{emailError}</Text>} 
      <TextInput
        placeholder="Enter Password"
        style={passwordError ? styles.inputBoxError : styles.emailBox}
        placeholderTextColor="#fff"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
         {passwordError &&  <Text style={styles.errorText}>{passwordError}</Text> } 
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginButton}>
        {isloading ?  <ActivityIndicator /> : 
        
        
        <Text style={{color: '#fff', fontSize: 15}}>Log In</Text>
  }
       
      </TouchableOpacity>
      <View style={styles.orText}>
      <Text>Don't Have an Account?</Text>
       <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}} onPress={() => navigation.navigate('signup')}>
        <Text style={styles.secondText}>{' '}Sign Up</Text>
       
        </TouchableOpacity>
      </View>
     
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  emailBox: {
    width: '90%',
    backgroundColor: '#0071f2',
    alignSelf: 'center',
    margin: 10,
  
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: '#fff',
    borderWidth:3,
    borderColor:'#0071f2'
  },
  inputBoxError: {
    width: '90%',
    backgroundColor: '#0071f2',
    alignSelf: 'center',
    margin: 10,
  borderRadius:10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    color: '#fff',
    borderWidth:3,
    borderColor:'red'
  },
  loginButton: {
    backgroundColor: '#2f2e41',
    width: '50%',
    padding: 20,

    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#fff'
  },
  errorText:{
    color:'red',
    fontSize:12
  },
  orText:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  secondText:{
    fontWeight:'bold'
  }
});
