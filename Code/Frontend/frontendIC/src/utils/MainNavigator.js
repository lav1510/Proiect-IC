import React, {useContext} from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from '../Component/Register'
import Login from '../Component/Login';
import { useLogin } from '../context/LoginProvider';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
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
  )
}

function MainNavigator() {
  const {isLoggedIn} = useLogin()
  return isLoggedIn ? <TabNavigator/> : <StackNavigator/>;
}

export default MainNavigator;



