import React from 'react'
import { Image, KeyboardAvoidingViewComponent, StyleSheet, Text, TextInput, View } from 'react-native'
// import Icon  from 'react-native-vector-icons/AntDesign';
import { Colors } from '../utils/Colors';
import { KeyboardAvoidingView, ScrollView, TouchableOpacity } from '../components/rneui';
import { fonts } from '@rneui/base';
import { Button, DatePicker, Input } from 'antd';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Icon } from '@rneui/themed';

function Arrow_Icon() {
  return (
    <View style={styles.iconView}>
      {/* <Icon name={'arrow-forward'} color={Colors.PrimaryBlue} type='ionicon' /> */}
      <TouchableOpacity className="ml-3 mr-2">
        <AntDesign
          name="arrowleft"
          size={25}
          // Inline Css added Unable to add Tailwind Css
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: 30,
            height: 30,
            left: 20,
            color: 'black',
            alignContent: 'center',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

function OTP_Feild() {
  return (
    <View style={styles.OTP_FeildView}>

      <Text style={{paddingLeft:20,fontFamily: 'Poppins'}}>Enter your mobile number</Text>
      <View style={styles.otp}>
        <TextInput style={{
          fontSize: 15,
        }} />
      </View>

      <View>
        <TouchableOpacity>
          <Text style={styles.buttonStyle}>Request OTP</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}



const ReqOTP_C5 = () => {
  return (
   <ScrollView>
    <View style={styles.mainContainer}>
      
      <Arrow_Icon />
      <View style={styles.header}>
        <Text style={styles.h1}>Welcome back!</Text>
        <Text style={styles.h2}>Login to your account</Text>
      </View>

      {/* <AntDesign name='left'/> */}
      
      <View style={styles.imgContainer}>
        <Image 
        // className="h-100 w-100"
          source={
            require('../assets/appImages/2_reqotp.png')
          } />
      </View>

      {/* <View style={styles.bottomContainer}>
        <Text>hello</Text>
      </View> */}

      <OTP_Feild />
     
      
    </View>
    </ScrollView> 
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    // flexDirection:'column',
    // justifyContent:'center',
    // alignItems:'center',
    // backgroundColor:Colors.PrimaryBlack,     //try applying height
    // height:200,
    //backgroundColor:'black'
  },
  iconView: {
    // flex:1,
  },
  header: {
    // flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  h1: {
    fontSize: 25,
    fontFamily: 'Poppins',
    fontWeight:'bold',
    color:Colors.PrimaryBlack,
  },
  h2: {
    fontFamily: 'Poppins',
    fontWeight:'normal',
    color:Colors.SecondaryGrey,
  },
  // bottomContainer: {
  //   flex:1,
  //   backgroundColor:'yellow'
  // },
  // iconContainer: {
  //   flex:1,
  //   backgroundColor:'white'
  // },
  imgContainer: {
    // flex:4,
    marginTop: 20,
    justifyContent: 'center',
    alignItems:'center',
    marginBottom: 20,
  },
  img: {
    justifyContent: 'center',
    alignContent: 'center',
    // width: 210,
    // height: 310,
    width:'100%',
    height:'100%',
    resizeMode: "cover",
  },
  OTP_FeildView: {
    // flex:4,
  },
  otp: {
    backgroundColor: Colors.PrimaryWhite,
    height: 45,
    borderRadius: 3,
    borderColor: Colors.SecondaryGrey,
    borderWidth: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  buttonStyle: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.PrimaryWhite,
    backgroundColor: Colors.PrimaryBlue,
    borderRadius: 10,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight:'bold',
    marginTop: 10,
    marginHorizontal:20,
    lineHeight: 40,
  },

})

export default ReqOTP_C5
