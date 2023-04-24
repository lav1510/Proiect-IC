import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from './Component/Register'
import Login from './Component/Login';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" 
                    component={Login} 
                    options={{
                      title: 'Login',
                      headerStyle: {
                        backgroundColor: '#E00001',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      } 
                    }}/>
      <Stack.Screen name="Register" 
                    component={Register} 
                    options={{
                      title: 'Register',
                      headerStyle: {
                        backgroundColor: '#E00001',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      }
                    }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;



