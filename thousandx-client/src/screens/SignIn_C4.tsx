import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../utils/Colors';

const SignIn_C4: React.FC = () => {
  return (
    <View style={styles.container}>


      <View style={styles.container1}>
        <Image style={styles.img}
          source={
            require('../assets/appImages/1_signin.png')
          } />
      </View>

      <View style={styles.container2}>
        <View >
          <TouchableOpacity style={styles.container3}>
            <Text style={styles.buttonStyle}>Explore More</Text>
          </TouchableOpacity>
        </View>

        <View >
          <TouchableOpacity style={styles.container3}>
            <Text style={styles.buttonStyle}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height:500,
    padding: 8,
    backgroundColor: 'white',
  },
  img: {
    justifyContent: 'center',
    alignContent: 'center',
    width: 210,
    height: 310,
    // paddingBottom:20,

  },
  container1: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.PrimaryWhite,
    backgroundColor: Colors.PrimaryBlue,
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 40,
  },
  container3: {
    width: 200,
    height: 50,
    // justifyContent:'flex-end',
    // backgroundColor:'#FFF',
    // borderRadius:6,
  },


});

export default SignIn_C4;