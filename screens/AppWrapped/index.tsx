import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Realm from 'realm';

import Home from '../Home';
import Discover from '../Discover';
import Profile from '../Profile';
import Settings from '../Settings';
import Login from '../Login';
import SignUp from '../SignUp';
import {useAppSelector, useThunkDispatch} from '../../redux/hooks';
import {getRealmApp} from '../../service/realm';
import {UserSchema} from '../../schemas/UserSchema';
import {LibrarySchema} from '../../schemas/LibrarySchema';
import {QuotesSchema} from '../../schemas/QuotesSchema';
import {loginAction} from '../../redux/actions/loginAction';

const Tab = createBottomTabNavigator();
const LoginScreen = createNativeStackNavigator();

function AppWrapped() {
  const app = getRealmApp();
  const {isLoggedIn} = useAppSelector(state => state.login);
  const realmRef = useRef({});
  const [user] = useState(app.currentUser);
  const dispatch = useThunkDispatch();

  useEffect(() => {
    if (!user) {
      return;
    }

    // The current user always has their own project, so we don't need
    // to wait for the user object to load before displaying that project.
    const config = {
      schema: [UserSchema, LibrarySchema, QuotesSchema],
      sync: {
        user: user,
        partitionValue: `user=${user.id}`,
      },
    };

    // Open a realm with the logged in user's partition value in order
    // to get the projects that the logged in user is a member of``
    Realm.open(config).then(userRealm => {
      realmRef.current = userRealm;
      const users = userRealm.objects('Quotes');
      dispatch(loginAction(user));

      users.addListener(() => {
        // The user custom data object may not have been loaded on
        // the server side yet when a user is first registered.
      });
    });

    return () => {
      // cleanup function
      const userRealm: any = realmRef.current;
      if (userRealm) {
        userRealm.close();
        realmRef.current = {};
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
