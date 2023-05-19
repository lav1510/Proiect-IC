import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useLogin} from '../context/LoginProvider'
import UserHome from '../Component/UserHome';
import UserContact from '../Component/UserContact';
import UserDonate from '../Component/UserDonate';
import UserEvents from '../Component/UserEvents';
import UserVolunteer from '../Component/UserVoluteer';


const homeName = 'Home';
const contactName ='Contact';
const donateName = 'Donate';
const eventsName = 'Events';
const volunteerName = 'Volunteer';

const Tab = createBottomTabNavigator();

function TabNavigator(){
  const {setIsLoggedIn} = useLogin();
    return(
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn === homeName) {
                        iconName = focused ? 'home' : 'ios-home';
                    } else if(rn === contactName) {
                        iconName = focused ? 'mail' : 'ios-mail';
                    } else if(rn === donateName) {
                        iconName = focused ? 'logo-euro' : 'logo-euro';
                    } else if(rn === eventsName) {
                        iconName = focused ? 'calendar' : 'ios-calendar';
                    } else if(rn === volunteerName) {
                        iconName = focused ? 'hand-right' : 'hand-right-outline';
                    }                    

                    return <Ionicons name = {iconName} size={size} color={color}/>
                }
            })}
            tabBarOptions={{
                activeTintColor: '#E00001',
                inactiveTintColor: 'grey',
                labelStyle: {paddingBottom: 5, fontSize:10},
                style: {padding: 20, heigh: 70}
            }}

            >

            <Tab.Screen name={homeName} component={UserHome} options={{
                        headerTitle: 'Home',
                        headerTitleAlign: 'left',
                        headerRight: () => (<Ionicons size={30} name="ios-log-out-outline" onPress={() => setIsLoggedIn(false)}/>),
                        headerStyle: {
                          backgroundColor: '#E00001',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        }}}/>

            <Tab.Screen name={eventsName} component={UserEvents}
                options={{
                        title: 'Events',
                        headerTitleAlign: 'left',
                        headerRight: () => (<Ionicons size={30} name="ios-log-out-outline" onPress={() => setIsLoggedIn(false)}/>),
                        headerStyle: {
                          backgroundColor: '#E00001',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        }}}/>

            <Tab.Screen initialRouteName='Home' name={contactName} component={UserContact} options={{
                        title: 'Contact',
                        headerTitleAlign: 'left',
                        headerRight: () => (<Ionicons size={30} name="ios-log-out-outline" onPress={() => setIsLoggedIn(false)}/>),
                        headerStyle: {
                          backgroundColor: '#E00001',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        }}}/>
            
            <Tab.Screen name={volunteerName} component={UserVolunteer}
                options={{
                        title: 'Volunteer',
                        headerTitleAlign: 'left',
                        headerRight: () => (<Ionicons size={30} name="ios-log-out-outline" onPress={() => setIsLoggedIn(false)}/>),
                        headerStyle: {
                          backgroundColor: '#E00001',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        }}}/>

            <Tab.Screen name={donateName} component={UserDonate}
                options={{
                        title: 'Donate',
                        headerTitleAlign: 'left',
                        headerRight: () => (<Ionicons size={30} name="ios-log-out-outline" onPress={() => setIsLoggedIn(false)}/>),
                        headerStyle: {
                          backgroundColor: '#E00001',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        }}}/>     

            </Tab.Navigator>
        
    );
}

export default TabNavigator;

