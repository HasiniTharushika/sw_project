import React, { PropsWithChildren, useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../../utils/Colors';
import { ScrollView, TouchableOpacity } from '../../components/rneui';
import Icon from 'react-native-vector-icons/AntDesign';
// import Form from '../../components/form';

//navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../../App"

// type iconProps = PropsWithChildren<{
//   name: string,
// }>

type add_Email_Props = NativeStackScreenProps<RootStackParamList, 'Add_Email'>


const Add_Email = ({ navigation }: add_Email_Props) => {

  // const [form] = Form.useForm();
  // const [recoveryEmail, setRecoveryEmail] = useState('')

  return (
    <ScrollView>
      <View style={styles.mainContainer}>

        <View style={styles.iconView}>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name='left' size={25} color={Colors.PrimaryBlack} />
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Text style={styles.h1}>We need to verify your identity</Text>
        </View>

        <View style={styles.imgContainer}>
          <Image
            source={
              require('../../assets/appImages/verify_identity.png')
            } />
        </View>

        <View style={{ marginVertical: 30, }}>
          <Text style={{ color: Colors.PrimaryBlack, fontFamily: 'Poppins', fontSize: 15 }}>We can help recover your account. First,
            enter your rin*******@gmail.com email
            and follow the instructions below.
          </Text>
        </View>


      {/* adding email */}

      <Text style={{fontFamily: 'Poppins', color:Colors.PrimaryBlack, fontSize:15}}>Recovery email</Text>
      <View style={styles.otp}>
      <TextInput style={{
          fontSize: 15,
        }} 
        placeholder='Type email'
        />
      </View>

      

      {/* validating form */}
        {/* <View>
          <Form
            form={form}
            onFinish={value => {
              // setRecoveryEmail(value.recoveryEmail)
            }}>
            <Form.Items
              schema={[
                {
                  id: 'recoveryEmail',
                  type: 'email',
                  name: 'Recovery email',
                  props: { placeholder: 'Email address' },
                  options: {
                    rules: [
                      { required: true, message: 'Recovery email is required' },
                      {
                        type: 'email',
                        // validator:'email',
                        message: 'Please enter a valid email',
                      },
                    ],
                  },
                },
              ]}
            />
          </Form>
          </View> */}

        


        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Verify_Recovery_Email")}
          >
            <Text style={styles.buttonStyle}>Continue</Text>
          </TouchableOpacity>
        </View>




      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 30,
  },
  iconView: {
    // flex:1,
  },
  header: {
    // flex:1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  h1: {
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: Colors.PrimaryBlack,
  },
  h2: {
    fontFamily: 'Poppins',
    fontWeight: 'normal',
    color: Colors.SecondaryGrey,
  },
  imgContainer: {
    // marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    justifyContent: 'center',
    alignContent: 'center',
    width: 50,
    height: 50,
    // width:'100%',
    // height:'100%',
    // resizeMode: "cover",
  },
  otp: {
    backgroundColor: Colors.PrimaryLightGrey,
    height: 45,
    borderRadius: 3,
    borderColor: Colors.SecondaryGrey,
    borderWidth: 1,
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
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 30,
    lineHeight: 40,
  },

})

export default Add_Email