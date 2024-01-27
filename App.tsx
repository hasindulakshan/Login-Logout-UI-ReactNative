import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import LogIn from './src/LogIn';
import SignUp from './src/SignUp';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='log-in' component={LogIn} options={{ title: "Login" }} />
        <Stack.Screen name='home' component={Home} options={{ title: "Home" }} />
        <Stack.Screen name="sign-up" component={SignUp} options={{ title: 'SignUp' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



