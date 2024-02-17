import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { ScrollView, Text, TouchableOpacity } from '../components/rneui';
import { Colors } from '../utils/Colors';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ClientSignIn: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');

    const handleInputChange = (text: string) => {
        // Allow only numeric input and limit to 10 characters
        const sanitizedText = text.replace(/[^0-9]/g, '').slice(0, 10);
        setPhoneNumber(sanitizedText);
    };

    const handleButtonClick = () => {
        console.log('Phone Number:', phoneNumber);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.Icon}>
                    <TouchableOpacity >
                    <AntDesign name='left' size={30} color={Colors.PrimaryBlack}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.midContainer}>
                    <View style={styles.header}>
                        <Text style={styles.h1}>Sign In</Text>
                        <Text style={styles.h2}>Create your account</Text>
                    </View>

                    <View style={styles.inputFields}>
                        <Text style={{ paddingBottom: 10 }}>Enter your mobile number</Text>
                        <View style={styles.numberContainer} >
                            <Text >+94</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                // placeholder="Enter 10-digit number"
                                maxLength={10}
                                value={phoneNumber}
                                onChangeText={handleInputChange}
                            />
                        </View>
                        <View>
                            <Text style={{ paddingVertical: 10 }}>Username</Text>
                            <TextInput style={styles.usernameContainer} />
                        </View>
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.buttonStyle}>Request OTP</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        margin: 20,
    },
    Icon: {},
    header: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    h1: {
        fontSize: 15,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: Colors.PrimaryBlack,
    },
    h2: {
        fontFamily: 'Poppins',
        fontWeight: 'normal',
        color: Colors.SecondaryGrey,
    },
    midContainer: {
        paddingTop: 50,
    },
    inputFields: {
        paddingTop: 30,
        paddingBottom: 20,
    },
    numberContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        alignItems: 'center',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    input: {
        width: 200,
        height: 40,
        // borderColor: 'gray',
        // borderWidth: 1,
        // marginVertical: 10,
        // paddingHorizontal: 10,
    },
    usernameContainer: {
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
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

export default ClientSignIn;
