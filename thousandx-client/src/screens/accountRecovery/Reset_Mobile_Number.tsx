import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from '../../components/rneui';
import { Colors } from '../../utils/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const resetNumber: React.FC = () => {
    const handleInputChange = (text: string, index: number) => {
        //  add validation or other logic here if needed
        // console.log(`Digit ${index + 1}: ${text}`);
    };

    const handleButtonClick = () => {
        // Handle the button click event
        // can use the collected digits here
        // console.log('Digits submitted');
    };

    return (
        <ScrollView>

            <View style={styles.container}>

                <View style={styles.Icon}>
                    <TouchableOpacity >
                        <AntDesign name='left' size={30} color={Colors.PrimaryBlack} />
                    </TouchableOpacity>
                </View>



                <View style={styles.textContainer}>
                    <Text style={styles.heading}>Reset Mobile Number</Text>
                </View>

                <Text style={{ fontFamily: 'Poppins', fontSize:15, color: Colors.PrimaryBlack }}>Enter new mobile number</Text>
                <View style={styles.otp}>
                    <TextInput style={{
                        fontSize: 15,
                    }}
                        placeholder='Type new mobile number'
                    />
                </View>

                <TouchableOpacity>
                    <Text style={styles.buttonStyle}>Reset</Text>
                </TouchableOpacity>

                <Text style={{color: Colors.PrimaryBlack ,fontFamily:'Poppins', fontSize: 15,marginVertical:15}}>A verification code has been sent to your new mobile number</Text>

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
                        <Text style={styles.buttonStyle}>Verify</Text>
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
    Icon: {},
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
    otp: {
        backgroundColor: Colors.PrimaryLightGrey,
        height: 45,
        borderRadius: 3,
        borderColor: Colors.SecondaryGrey,
        borderWidth: 1,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    normalText: {
        fontFamily: 'Poppins',
        fontSize:15,
        fontWeight: 'normal',
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
        marginVertical: 30,
        lineHeight: 40,
    },
});

export default resetNumber;
