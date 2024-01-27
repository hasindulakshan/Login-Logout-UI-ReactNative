import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

const SignUp = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Text style={styles.greeting}>Welcome To The Registration</Text>
                <Text style={styles.greeting_sub}>We will provide safe travel...!</Text>
                <Image style={{ width: 210, height: 160, margin: 12 }} source={require('./travel.png')} />
                <TextInput style={styles.textBox} placeholder="   Enter Your Name:" />
                <TextInput style={styles.textBox} placeholder="   Enter Your email:" />
                <TextInput style={styles.textBox} placeholder="   Enter Your Password:" />
                <TextInput style={styles.textBox} placeholder="   Confirm Password:" />
                <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <Text style={styles.customButton}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('log-in')}>
                    <Text style={{ color: 'black', marginTop: 10 }}>
                        Already have an account? <Text style={styles.linkText}>Log in</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    greeting: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 25,
        marginBottom: 10
    },
    greeting_sub: {
        color: 'black',
        fontSize: 16,
        marginBottom: 15,
    },
    textBox: {
        width: 300,
        height: 40,
        borderRadius: 5,
        borderColor: 'black',
        borderBottomWidth: 2,
        marginBottom: 20,
    },
    customButton: {
        marginTop: 20,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 100,
        backgroundColor: '#008BFF',
        color:'white',
        fontWeight:'bold'
    },
    linkText: {
        color: 'blue',
        fontSize: 16,
    },
})

export default SignUp;
