import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.centerContainer}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Welcome To Traveling</Text>
                <Image style={{ width: 300, height: 140, margin: 12 }} source={require('./plane.png')} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 90, height: 100, margin: 12 }} source={require('./place.png')} />
                    <View>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Countries</Text>
                        <Text >Sri Lanka</Text><Text >China</Text><Text >UK</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 90, height: 100, margin: 12 }} source={require('./location.png')} />
                    <View>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Locations</Text>
                        <Text >Port City</Text>
                        <Text >97A</Text>
                        <Text >NewYork</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 90, height: 100, margin: 12 }} source={require('./enjoy.png')} />
                    <View>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Facilities</Text>
                        <Text >Foods</Text>
                        <Text >Transport</Text>
                        <Text >Functions</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 90, height: 100, margin: 12 }} source={require('./club.png')} />
                    <View>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>OutDoor Activities</Text>
                        <Text >DJ Party</Text>
                        <Text >Music Fes</Text>
                        <Text >Clubs</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('sign-up')}>
                    <Text style={{ color: 'black', marginTop: 10 }}>
                        If You Want To Log Out? <Text style={{ color: 'red' }}>Log out</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    centerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
})

export default Home;
