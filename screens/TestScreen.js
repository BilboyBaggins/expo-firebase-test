import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import * as firebase from 'firebase';

import { TestComponent } from '../components/AppComponents/index';

    

// export default function TestScreen() {
//   return (
//     <View style={{paddingTop:20, paddingLeft:10}}>
//       <Text>Hello</Text>
//       <TestComponent />
//     </View>
//   );
// }


// const styles = StyleSheet.create({
 
// });

export default class TestScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };

  }

  render() {
  return (
    <View style={{paddingTop:20, paddingLeft:10}}>
      <Text>oh hey</Text>
      <TestComponent />
    </View>
  );
}
}


const styles = StyleSheet.create({
 
});
