import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// import { Image,Text } from '../components/rneui';
import { Colors } from '../utils/Colors';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { Button } from '@rneui/themed';
import tailwindConfig from '../../tailwind.config';
import classNames from 'classnames';
import { ScrollView } from '../components/rneui';

const SignIn_C4: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* className='h-500 bg-white p8' */}

        <View style={styles.container1}>
          {/* className="mt-20 flex justify-center items-center mb-20" */}

          <Image style={styles.img}
            source={
              require('../assets/appImages/1_signin.png')
            } />
        </View>

        <View style={styles.container2} >
          {/* className='flex justify-center items-center w-210 h-310'  */}

          <View >
            <TouchableOpacity style={styles.container3}>
              {/* className='w-200 h-50'  */}

              <Text style={styles.buttonStyle}>
                {/* className='h-40 flex justify-center items-center text-white bg-blue-500 rounded-full text-center mt-10 leading-40' */}

                Explore More</Text>
            </TouchableOpacity>
          </View>

          <View >
            <TouchableOpacity style={styles.container3}>
              {/*  className='w-200 h-50' */}

              <Text style={styles.buttonStyle}>
                {/* className='h-40 flex justify-center items-center text-white bg-blue-500 rounded-full text-center mt-10 leading-40' */}
                Sign In</Text>

            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          <Text>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.resendReset}>Login</Text>
          </TouchableOpacity>

        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    padding: 8,
    backgroundColor: 'white',
  },
  img: {
    justifyContent: 'center',
    alignContent: 'center',
    width: 200,
    height: 300,
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
    fontFamily: 'Poppins',
    fontWeight: 'bold',
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
  resendReset: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: Colors.PrimaryYellow,
  },


});

export default SignIn_C4;