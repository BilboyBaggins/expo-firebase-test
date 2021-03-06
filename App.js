import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ApiKeys from './constants/ApiKeys';
import * as firebase from 'firebase';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import RootNavigator from './navigation/RootNavigator';
import useLinking from './navigation/useLinking';

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);
  const [isAuthenticationReady, setAuthenticationReady] = React.useState(false);
  const [isAuthenticated, setAuthenticated] = React.useState(false);

  // Intialize firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(ApiKeys.FirebaseConfig);
  }

  firebase.auth().onAuthStateChanged((user) => {
    setAuthenticationReady(true);
    setAuthenticated(!!user);
  })


  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !isAuthenticationReady && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator>
            {(isAuthenticated) ? <Stack.Screen name="Root" component={BottomTabNavigator} /> : <Stack.Screen name="Root" component={RootNavigator} />}
          </Stack.Navigator>
        </NavigationContainer>

        {/* {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
