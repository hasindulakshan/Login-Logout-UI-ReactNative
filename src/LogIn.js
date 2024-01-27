import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

const LogIn = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Text style={styles.greeting}>Welcome Back To Login</Text>
                <Text style={styles.greeting_sub}>Thanks for using us...!</Text>
                <Image style={{ width: 210, height: 160, margin: 12 }} source={require('./travel2.png')} />
                <TextInput style={styles.textBox} placeholder="   Enter Your email:" />
                <TextInput style={styles.textBox} placeholder="   Enter Your Password:" />
                <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <Text style={styles.customButton}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Reset successfully')}>
                    <Text style={{ color: 'black', marginTop: 40 }}>
                        Did you forget your password? <Text style={styles.linkText}>Reset Password</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('sign-up')}>
                    <Text style={{ color: 'black', marginTop: 15 }}>
                        Don't have an account? <Text style={styles.linkText}>Sign In</Text>
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
        color: 'white',
        fontWeight: 'bold'
    },
    linkText: {
        color: 'blue',
        fontSize: 16,
    },
})

export default LogIn;