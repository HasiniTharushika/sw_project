import { Button } from '@rneui/themed'
import React, {useState,useEffect}from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import tailwindConfig from './tailwind.config'
import { Colors } from './src/utils/Colors'
import SignIn_C4 from './src/screens/SignIn_C4'
import ReqOTP_C5 from './src/screens/ReqOTP_C5'
import Verification_C6 from './src/screens/Verification_C6'
import ClientSignIn_C7 from './src/screens/ClientSignIn_C7'
import SelectArea_C9 from './src/screens/SelectArea_C9'
import Picker from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigations from './src/navigations/AppNavigations'


const App = () => {
  
  return (
    <View>
<AppNavigations/>

     {/* / <SignIn_C4/>  */}

      <ReqOTP_C5/> 

      {/* <Verification_C6/> */}

      {/* <ClientSignIn_C7 /> */}
      
      <SelectArea_C9/>
     



    </View>
  )
}

export default App



