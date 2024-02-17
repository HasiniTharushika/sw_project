import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TouchableOpacity } from '../components/rneui';
import { Colors } from '../utils/Colors';

const NumberInputComponent: React.FC = () => {
  const handleInputChange = (text: string, index: number) => {
    // You can add validation or other logic here if needed
    console.log(`Digit ${index + 1}: ${text}`);
  };

  const handleButtonClick = () => {
    // Handle the button click event
    // You can use the collected digits here
    console.log('Digits submitted');
  };

  return (
    <ScrollView>

      <View style={styles.container}>

        <View style={styles.Icon}>
          <TouchableOpacity >
            <AntDesign name="arrowleft" size={24} color='black' />
          </TouchableOpacity>
        </View>

        <View style={styles.midContainer}>

        <View style={styles.textContainer}>
          <Text style={styles.heading}>Verification</Text>
          <Text style={styles.normalText}>Please enter OTP that we send to the mobile number</Text>
        </View>

        <View style={styles.inputContainer}>
          {[...Array(4)].map((_, index) => (
            <TextInput
              key={index}
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(text) => handleInputChange(text, index)}
            />
          ))}
        </View>

        <View style={styles.smsContainer}>
          <Text style={styles.normalText}>Didn't you get sms?</Text>
          <TouchableOpacity style={{paddingLeft:15}}>
            <Text style={styles.resendReset}>Resend Code</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop:20,marginBottom:10}}>
          <TouchableOpacity>
            <Text style={styles.buttonStyle}>Verify</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.resetAcc}>
          <Text style={styles.resendReset}>Reset my Account</Text>
        </TouchableOpacity>

        </View>

      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  Icon: {},
  midContainer:{
    paddingTop:65,
  },
  textContainer: {
    marginBottom:15,
  },
  heading: {
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: Colors.PrimaryBlack,
  },
  normalText: {
    fontFamily: 'Poppins',
    fontWeight: 'normal',
    color: Colors.SecondaryGrey,
  },
  resendReset: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: Colors.PrimaryYellow,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  input: {
    width: 40,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 20,
  },
  smsContainer: {
    flexDirection: 'row'
  },
  resetAcc: {
    alignItems: 'flex-end',
    marginRight: 5,
  },
  buttonStyle: {
    height: 40,
    color: Colors.PrimaryWhite,
    backgroundColor: Colors.PrimaryBlue,
    borderRadius: 10,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginTop: 10,
    // marginHorizontal: 20,
    lineHeight: 40,
  },
});

export default NumberInputComponent;
