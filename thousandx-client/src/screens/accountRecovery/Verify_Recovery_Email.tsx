import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from '../../components/rneui';
import { Colors } from '../../utils/Colors';
import Icon from 'react-native-vector-icons/AntDesign';

//navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../../App"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

type verify_Email_Props = NativeStackScreenProps<RootStackParamList, 'Verify_Recovery_Email'>

const Verify_Email = ({ route }: verify_Email_Props) => {

    // const {email_ID} = route.params

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const handleInputChange = (text: string, index: number) => {
        // You can add validation or other logic here if needed
        // console.log(`Digit ${index + 1}: ${text}`);
    };

    const handleButtonClick = () => {
        // Handle the button click event
        // Can use the collected digits here
        // console.log('Digits submitted');
    };

    return (
        <ScrollView>

            <View style={styles.container}>

                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Icon name='left' size={25} color={Colors.PrimaryBlack}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.heading}>Recovery email verification</Text>
                    <View style={styles.imgContainer}>
                        <Image
                            source={
                                require('../../assets/appImages/add_email.png')
                            } />
                    </View>
                    <Text style={styles.normalText}>A verification code has been sent to rin*******@gmail.com</Text>
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
                    <Text style={styles.normalText}>Resend</Text>
                    <TouchableOpacity style={{ paddingLeft: 15 }}>
                        <Text style={styles.resendReset}>Verification Code</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 20, marginBottom: 10 }}>
                    <TouchableOpacity>
                        <Text

                            style={styles.buttonStyle}
                        >Verify</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    textContainer: {
        marginTop:50,
        marginBottom: 15,
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        justifyContent: 'center',
        alignContent: 'center',
        // width: 50,
        // height: 50,
    },
    heading: {
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: Colors.PrimaryBlack,
        alignSelf: 'center',

    },
    normalText: {
        fontFamily: 'Poppins',
        fontWeight: 'normal',
        fontSize: 15,
        color: Colors.PrimaryBlack,
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
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
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
        fontSize:17,
        fontWeight: 'bold',
        marginTop: 10,
        // marginHorizontal: 20,
        lineHeight: 40,
    },
});

export default Verify_Email;