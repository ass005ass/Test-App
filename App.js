import React, {Component} from 'react';
import { StyleSheet,
        Text,
        TouchableOpacity,
        ImageBackground, } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import SignInScreen from './screens/SignInScreen';
import TabNavigator from "./navigation/MainNavigator";


class HomeScreen extends Component {

        render() {

                const { container, textButton, buttonStart, } = styles;

                return (

                    <ImageBackground
                        style={container}
                        source={require('././assets/image.png')}>

                            <TouchableOpacity
                                style={buttonStart}
                                onPress={() => this.props.navigation.navigate('SignIn')}>
                                    <Text style={textButton}> Start </Text>
                            </TouchableOpacity>

                    </ImageBackground>
                );

        }
}

const AppNavigator = createStackNavigator({
        Home: {
                screen: HomeScreen,
                navigationOptions:{
                       header: null
                }
        },
        SignIn: {
                screen: SignInScreen,
                navigationOptions:{
                        title: 'Sign In'
                },
        },
        Main: {
                screen: TabNavigator
        },
});

const styles = StyleSheet.create({
        container: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-end',
        },

        buttonStart: {
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#EB5757',
                height: 50,
                width: '80%',
                margin: 63,
                borderRadius: 10,
        },

        textButton: {
                fontFamily: 'Roboto',
                fontSize: 20,
                color: '#fff',
        },
});

export default createAppContainer(AppNavigator);

