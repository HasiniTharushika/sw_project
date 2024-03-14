import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
//navigation
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
//screens
import SignIn_C4 from './src/screens/SignIn_C4'
import ReqOTP_C5 from './src/screens/ReqOTP_C5'
import Verification_C6 from './src/screens/Verification_C6'
import Add_Email from './src/screens/accountRecovery/Add_Recovery_Email'
import Verify_Recovery_Email from './src/screens/accountRecovery/Verify_Recovery_Email'
import Reset_Mobile_Number from './src/screens/accountRecovery/Reset_Mobile_Number'

export type RootStackParamList = {
  Add_Email: undefined
  Verify_Recovery_Email: undefined
};

const Stack1 = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (

    <NavigationContainer>
      <Stack1.Navigator initialRouteName='Add_Email' screenOptions={{ headerShown: false }} >
        <Stack1.Screen
        name='Add_Email'
        component={Add_Email}
        />
        <Stack1.Screen
         name='Verify_Recovery_Email'
         component={Verify_Recovery_Email}
        /> 
      </Stack1.Navigator>
    </NavigationContainer>


    // <View>
    //   {/* <SignIn_C4/>  */}

    //   {/* <ReqOTP_C5 /> */}

    //   {/* <Verification_C6 /> */}

    //   {/* <Add_Email/> */}

    //   {/* <Verify_Recovery_Email/> */}

    //   <Reset_Mobile_Number/>

    // </View>
  )
}

export default App



