import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TestScreen from '../screens/TestScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';

const RootStackNavigator = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Login';


export default function RootNavigator({ navigation }) {
    // navigation.setOptions({ headerTitle: getHeaderTitle(route) });
    // navigation.setOptions({ headerTitle: 'HeaderTitle'})
    return (
        <RootStackNavigator.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <RootStackNavigator.Screen 
                name="Login"
                component={LoginScreen}
            />
            <RootStackNavigator.Screen 
                name="Test"
                component={TestScreen}
            />
            <RootStackNavigator.Screen 
                name="Signup"
                component={SignupScreen}
            />
            <RootStackNavigator.Screen 
                name="Forgot Password"
                component={ForgotPasswordScreen}
            />
        </RootStackNavigator.Navigator>
    );
}

// export default function RootNavigator({ navigation, route }) {
//   // Set the header title on the parent stack navigator depending on the
//   // currently active tab. Learn more in the documentation:
//   // https://reactnavigation.org/docs/en/screen-options-resolution.html
//   navigation.setOptions({ headerTitle: getHeaderTitle(route) });

//   return (
//     <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
//       <BottomTab.Screen
//         name="Test"
//         component={TestScreen}
//         options={{
//           title: 'Get Started',
//           tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
//         }}
//       />
//       <BottomTab.Screen
//         name="Login"
//         component={LoginScreen}
//         options={{
//           title: 'Login',
//           tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
//         }}
//       />
                                                
//     </BottomTab.Navigator>
//   );
// }

// function getHeaderTitle(route) {
//   const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

//   switch (routeName) {
//     case 'Test':
//       return 'How to get started';
//   }
// }