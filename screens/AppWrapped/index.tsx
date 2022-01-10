import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../Home';
import Discover from '../Discover';
import Profile from '../Profile';
import Settings from '../Settings';
import Login from '../Login';
import SignUp from '../SignUp';
import {useAppSelector} from '../../redux/hooks';

const Tab = createBottomTabNavigator();
const LoginScreen = createNativeStackNavigator();

function AppWrapped() {
  const {isLoggedIn} = useAppSelector(state => state.login);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isLoggedIn ? (
          <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
              name="Home"
              component={Home}
              options={{title: 'Home'}}
            />
            <Tab.Screen name="Discover" component={Discover} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
        ) : (
          <LoginScreen.Navigator>
            <LoginScreen.Screen name="Login" component={Login} />
            <LoginScreen.Screen name="SignUp" component={SignUp} />
          </LoginScreen.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default AppWrapped;
