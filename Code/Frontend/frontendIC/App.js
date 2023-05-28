import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainNavigator from './src/utils/MainNavigator';
import LoginProvider from './src/context/LoginProvider';

function App() {
  return (
    <LoginProvider>
        <NavigationContainer>
            <MainNavigator/>
        </NavigationContainer>
    </LoginProvider>
  );
}

export default App;



