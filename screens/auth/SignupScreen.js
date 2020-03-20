import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import * as firebase from 'firebase';

export default class SignupScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordConfirm: ""
        };

    }

    onSignupPress = () => {
        if (this.state.password !== this.state.passwordConfirm) {
            Alert.alert('Passwords must match');
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {

            }, (error) => {
                Alert.alert(error.message);
            })
    }

    onBackToLoginPress = () => {
        this.props.navigation.dispatch(CommonActions.goBack());
    }

    render() {
        return (
            <View style={{paddingTop:50, alignItems:'center'}}>
                <TextInput style={{width:200, height:40, borderWidth:1}}
                    value={this.state.email}
                    onChangeText={(text) => { this.setState({email: text})}}
                />
                <TextInput style={{marginTop:15, width:200, height:40, borderWidth:1}}
                    value={this.state.password}
                    onChangeText={(text) => { this.setState({password: text})}}
                />
                <TextInput style={{marginTop:15, width:200, height:40, borderWidth:1}}
                    value={this.state.passwordConfirm}
                    onChangeText={(text) => { this.setState({passwordConfirm: text})}}
                />

                <Button title="Signup" onPress={this.onSignupPress} />
                
                <Button title="Back to Login" onPress={this.onBackToLoginPress} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
});